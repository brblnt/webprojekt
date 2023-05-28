package nostra.cosa.hotelbooking.auth.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.dto.AuthorizationDTO;
import nostra.cosa.hotelbooking.service.service.impl.AuthenticationServiceImpl;
import nostra.cosa.hotelbooking.auth.dto.RegistrationDTO;
import nostra.cosa.hotelbooking.auth.validation.RegistrationDataNotValidException;
import nostra.cosa.hotelbooking.auth.validation.RegistrationValidationError;
import nostra.cosa.hotelbooking.auth.validation.RegistrationValidator;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;

import java.util.List;

/**
 * Service for Authentication.
 */
@Service
@Slf4j
public class HotelBookingAuthenticationService {

    private final AuthenticationServiceImpl authenticationService;

    private final RegistrationValidator registrationValidator;

    private final PasswordEncoder passwordEncoder;

    private final InMemoryUserDetailsManager userDetailsManager;

    public HotelBookingAuthenticationService(final AuthenticationServiceImpl authenticationService, final RegistrationValidator registrationValidator) {
        this.authenticationService = authenticationService;
        this.registrationValidator = registrationValidator;
        this.passwordEncoder = new BCryptPasswordEncoder();
        this.userDetailsManager = new InMemoryUserDetailsManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return this.passwordEncoder;
    }

    public ResponseEntity<AuthenticationDataDTO> register(final RegistrationDTO registrationDTO) throws RegistrationDataNotValidException {
        final List<RegistrationValidationError> validationErrors = registrationValidator.validate(registrationDTO);
        if (validationErrors.isEmpty()) {
            throw new RegistrationDataNotValidException(validationErrors);
        }
        registrationDTO.setPassword(passwordEncoder.encode(registrationDTO.getPassword()));
        final String token = generateToken();
        final AuthenticationDataDTO authenticationDataDTO = authenticationService.toAuthenticationDataDTO(registrationDTO, token);
        return ResponseEntity.ok().body(authenticationService.create(authenticationDataDTO));
    }

    public ResponseEntity<AuthenticationDataDTO> login(final String userName, final String password) {
        final AuthenticationDataDTO authData;
        try {
            authData = authenticationService.getAuthenticationDataDTOByUserName(userName);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(401).build();
        }

        if (!passwordEncoder.matches(password, authData.getPassword())) {
            return ResponseEntity.status(401).build();
        }
        saveUser(authData);
        return ResponseEntity.ok().body(authData);
    }


    public AuthenticationDataDTO getAuthenticationData(final String userName) {
        log.info("Logging in... {}", userName);
        return authenticationService.getAuthenticationDataDTOByUserName(userName);
    }

    public UserDetails getAuthorizationDTOByToken(final String token) {
        AuthenticationDataDTO authenticationDataDTO;
        try {
            authenticationDataDTO = authenticationService.getAuthenticationDataByToken(token);
        } catch (IllegalArgumentException e) {
            return null;
        }
        return userDetailsManager.loadUserByUsername(authenticationDataDTO.getUserName());
    }


    public ResponseEntity<String> logout(final String userName) {
        this.userDetailsManager.deleteUser(userName);
        log.info("Logging out...{}", userName);
        return ResponseEntity.ok().build();
    }

    public void clearUserSession(final HttpServletRequest request, final String userName) {
        if (userDetailsManager.userExists(userName)) {
            userDetailsManager.deleteUser(userName);
            clearSession(request);
        }
    }

    private void saveUser(final AuthenticationDataDTO authData) {
        final AuthorizationDTO user = new AuthorizationDTO(authData, authData.getUserName(), authData.getPassword());
        userDetailsManager.createUser(user);
        final Authentication authentication = UsernamePasswordAuthenticationToken.authenticated(authData.getUserName(), authData.getPassword(), user.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        log.info("User: {} logged in", authData.getUserName());
    }

    private void clearSession(final HttpServletRequest request) {
        final HttpSession session = request.getSession(false);
        SecurityContextHolder.clearContext();
        if (session != null) {
            session.invalidate();
        }
    }

    private String generateToken() {
        return RequestContextHolder.currentRequestAttributes().getSessionId();
    }
}

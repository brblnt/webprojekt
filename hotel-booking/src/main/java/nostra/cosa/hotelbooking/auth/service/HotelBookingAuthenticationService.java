package nostra.cosa.hotelbooking.auth.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.dto.AuthorizationDTO;
import nostra.cosa.hotelbooking.auth.dto.RegistrationDTO;
import nostra.cosa.hotelbooking.auth.validation.RegistrationDataNotValidException;
import nostra.cosa.hotelbooking.auth.validation.RegistrationValidationError;
import nostra.cosa.hotelbooking.auth.validation.RegistrationValidator;
import nostra.cosa.hotelbooking.service.util.data.AuthenticationUtilities;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service for Authentication.
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class HotelBookingAuthenticationService {

    private final AuthenticationUtilities authUtility;

    private final InMemoryUserDetailsManager userDetailsManager;

    private final RegistrationValidator registrationValidator;

    public ResponseEntity<AuthenticationDataDTO> register(final RegistrationDTO registrationDTO) throws RegistrationDataNotValidException {
        final List<RegistrationValidationError> validationErrors = registrationValidator.validate(registrationDTO);
        if (validationErrors.isEmpty()) {
            throw new RegistrationDataNotValidException(validationErrors);
        }
        final AuthenticationDataDTO authenticationDataDTO = authUtility.toAuthenticationDataDTO(registrationDTO);
        return ResponseEntity.ok().body(authUtility.saveUser(authenticationDataDTO));
    }

    public ResponseEntity<AuthenticationDataDTO> login(final String userName, final String password) {
        final AuthenticationDataDTO authData = authUtility.getAuthenticationDataDTOByUserName(userName);
        if (!password.equals(authData.getPassword())) {
            return ResponseEntity.status(401).build();
        }
        saveUser(authData);
        return ResponseEntity.ok().body(authData);
    }

    public AuthenticationDataDTO getAuthenticationData(final String userName) {
        log.info("Logging in... " + userName);
        return authUtility.getAuthenticationDataDTOByUserName(userName);
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
        final Authentication authentication = new UsernamePasswordAuthenticationToken(authData.getPassword(), null, user.getAuthorities());
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
}

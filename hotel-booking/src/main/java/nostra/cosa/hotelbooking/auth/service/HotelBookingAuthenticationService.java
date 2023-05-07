package nostra.cosa.hotelbooking.auth.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.dto.AuthorizationDTO;
import nostra.cosa.hotelbooking.service.util.data.AuthenticationUtilities;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Service;

/**
 * Service for Authentication.
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class HotelBookingAuthenticationService {

    private final AuthenticationUtilities authUtility;

    private final InMemoryUserDetailsManager userDetailsManager;

    public ResponseEntity<AuthenticationDataDTO> login(String userName) {
        AuthenticationDataDTO authData = authUtility.getAuthenticationDataDTOByUserName(userName);
        saveUser(authData);
        return ResponseEntity.ok().body(authData);
    }

    public AuthenticationDataDTO getAuthenticationData(String userName) {
        log.info("Logging in... " + userName);
        return authUtility.getAuthenticationDataDTOByUserName(userName);
    }

    public ResponseEntity<String> logout(String userName) {
        this.userDetailsManager.deleteUser(userName);
        log.info("Logging out...{}", userName);
        return ResponseEntity.ok().build();
    }

    public void clearUserSession(HttpServletRequest request, String userName) {
        if (userDetailsManager.userExists(userName)) {
            userDetailsManager.deleteUser(userName);
            clearSession(request);
        }
    }

    private void saveUser(AuthenticationDataDTO authData) {
        AuthorizationDTO user = new AuthorizationDTO(authData, authData.getUserName(), authData.getPassword());
        userDetailsManager.createUser(user);
        Authentication authentication = new UsernamePasswordAuthenticationToken(authData.getPassword(), null, user.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        log.info("User: {} logged in" + authData.getUserName());
    }

    private void clearSession(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        SecurityContextHolder.clearContext();
        if (session != null) {
            session.invalidate();
        }
    }
}

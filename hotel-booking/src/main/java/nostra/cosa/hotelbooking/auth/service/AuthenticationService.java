package nostra.cosa.hotelbooking.auth.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.dto.UserPrincipal;
import nostra.cosa.hotelbooking.service.util.AuthenticationUtilities;
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
@AllArgsConstructor
@Slf4j
public class AuthenticationService {

    private final InMemoryUserDetailsManager userDetailsManager;

    private final AuthenticationUtilities authUtility;

    public void deleteCookies(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        SecurityContextHolder.clearContext();
        if (session != null) {
            session.invalidate();
        }
    }

    public void clearSession(HttpServletRequest request, String userName) {
        if (userName != null) {
            if (userDetailsManager.userExists(userName)) {
                userDetailsManager.deleteUser(userName);
            }
            deleteCookies(request);
        }
    }

    public ResponseEntity<AuthenticationDataDTO> generateUser(String userName) {
        AuthenticationDataDTO authData = getAuthenticationData(userName);
        saveUser(authData);
        return ResponseEntity.ok().body(authData);
    }

    public AuthenticationDataDTO getAuthenticationData(String userName) {
        log.info("Login attempt: " + userName);
        return authUtility.getAuthenticationDataDTOByUserName(userName);
    }

    public ResponseEntity<String> logout(String userName) {
        this.userDetailsManager.deleteUser(userName);
        log.info("The user has been logged out.");
        return ResponseEntity.ok().build();
    }

    private void saveUser(AuthenticationDataDTO authData) {
        UserPrincipal user = new UserPrincipal(authData, authData.getUserName(), authData.getPassword());
        userDetailsManager.createUser(user);
        Authentication authentication = new UsernamePasswordAuthenticationToken(authData.getPassword(), null, user.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        log.info("The user has been logged in.");
    }
}

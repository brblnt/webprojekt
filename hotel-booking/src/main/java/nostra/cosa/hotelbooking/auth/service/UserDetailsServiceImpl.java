package nostra.cosa.hotelbooking.auth.service;

import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.dto.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Service implementation for UserDetails.
 */
@Slf4j
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private static final String TOKEN_NOT_FOUND_MESSAGE = "Token not found: %s";

    @Autowired
    private AuthenticationService authenticationService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AuthenticationDataDTO authData = authenticationService.getAuthenticationData(username);
        if (authData == null) {
            String message = String.format(TOKEN_NOT_FOUND_MESSAGE, username);
            log.error(message);
            throw new UsernameNotFoundException(message);
        }

        return new UserPrincipal(authData, username, authData.getPassword());
    }

}

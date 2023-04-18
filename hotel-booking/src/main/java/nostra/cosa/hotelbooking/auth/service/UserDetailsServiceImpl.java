package nostra.cosa.hotelbooking.auth.service;

import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.dto.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsServiceImpl implements UserDetailsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    private static final String TOKEN_NOT_FOUND_MESSAGE = "Token not found: %s";

    @Autowired
    private AuthenticationService authenticationService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AuthenticationDataDTO authData = authenticationService.getAuthenticationData(username);
        if (authData == null) {
            String message = String.format(TOKEN_NOT_FOUND_MESSAGE, username);
            LOGGER.error(message);
            throw new UsernameNotFoundException(message);
        }

        return new UserPrincipal(authData, username, authData.getPassword());
    }

}

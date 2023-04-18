package nostra.cosa.hotelbooking.auth.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    private static final Logger LOGGER = LoggerFactory.getLogger(CustomAuthenticationProvider.class);
    private static final String INVALID_MESSAGE = "Invalid login details";
    private final InMemoryUserDetailsManager userDetailsManager;

    public CustomAuthenticationProvider() {
        this.userDetailsManager = new InMemoryUserDetailsManager();
    }


    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        UserDetails user;
        try {
            user = userDetailsManager.loadUserByUsername(authentication.getName());
        } catch (UsernameNotFoundException e) {
            LOGGER.error(INVALID_MESSAGE);
            throw new BadCredentialsException(INVALID_MESSAGE);
        }
        return createAuthentication(authentication, user);
    }

    private Authentication createAuthentication(Authentication authentication, UserDetails user) {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user.getUsername(), authentication.getCredentials());
        token.setDetails(authentication.getDetails());
        return token;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

}

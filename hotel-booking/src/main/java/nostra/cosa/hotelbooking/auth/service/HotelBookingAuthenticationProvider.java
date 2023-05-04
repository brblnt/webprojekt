package nostra.cosa.hotelbooking.auth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Component;

/**
 * Provider component for Authentication.
 */
@Component
@Slf4j
@RequiredArgsConstructor
public class HotelBookingAuthenticationProvider implements AuthenticationProvider {

    private InMemoryUserDetailsManager userDetailsManager;

    @Bean
    public InMemoryUserDetailsManager userDetailsManager() {
        this.userDetailsManager = new InMemoryUserDetailsManager();
        return userDetailsManager;
    }


    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        UserDetails user;
        try {
            user = userDetailsManager.loadUserByUsername(authentication.getName());
        } catch (UsernameNotFoundException e) {
            log.error("Not valid login details");
            throw new BadCredentialsException("Not valid login details");
        }
        return createAuthentication(authentication, user);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

    private Authentication createAuthentication(Authentication authentication, UserDetails user) {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user.getUsername(), authentication.getCredentials());
        token.setDetails(authentication.getDetails());
        return token;
    }
}

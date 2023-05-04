package nostra.cosa.hotelbooking.auth.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.dto.AuthorizationDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Service implementation for UserDetails.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final HotelBookingAuthenticationService hotelBookingAuthenticationService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AuthenticationDataDTO authData = hotelBookingAuthenticationService.getAuthenticationData(username);
        if (authData == null) {
            String message = String.format("User data not found: %s", username);
            log.error(message);
            throw new UsernameNotFoundException(message);
        }
        return new AuthorizationDTO(authData, username, authData.getPassword());
    }

}

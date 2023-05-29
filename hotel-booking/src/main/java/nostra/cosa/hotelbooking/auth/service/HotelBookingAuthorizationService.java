package nostra.cosa.hotelbooking.auth.service;

import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

/**
 * Service for Authorization.
 */
@Service
public class HotelBookingAuthorizationService implements PermissionEvaluator {

    @Override
    public boolean hasPermission(Authentication authentication, Object targetDomainObject, Object permission) {
        if ((authentication == null) || (targetDomainObject == null) || (permission == null)) {
            return false;
        }
        return hasAuthority(authentication, targetDomainObject.toString(), permission.toString());
    }


    /**
     * We do not use this. We use the first method.
     */
    @Override
    public boolean hasPermission(Authentication authentication, Serializable targetId, String role, Object permission) {
        return false;
    }

    private boolean hasAuthority(final Authentication authentication, final String role, final String permission) {
        List<String> authorities = getAuthorities(role, permission);
        for (final String authority: authorities) {
            for (GrantedAuthority grantedAuthority : authentication.getAuthorities()) {
                if (grantedAuthority.getAuthority().equals(authority)) {
                    return true;
                }
            }
        }
        return false;
    }

    private List<String> getAuthorities(final String role, final String permission) {
        return Arrays.stream(role.split(",")).map(value -> value.concat("_").concat(permission)).toList();
    }

}

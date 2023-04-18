package nostra.cosa.hotelbooking.auth.service;

import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.io.Serializable;

@Service
public class AuthorizationService implements PermissionEvaluator {

    @Override
    public boolean hasPermission(Authentication authentication, Object targetDomainObject, Object permission) {
        if ((authentication == null) || (targetDomainObject == null) || (permission == null)) {
            return false;
        }
        return hasPrivilege(authentication, targetDomainObject.toString(), permission.toString());
    }

    @Override
    public boolean hasPermission(Authentication authentication, Serializable targetId, String targetType, Object permission) {
        // We don't use this.
        return false;
    }

    private boolean hasPrivilege(Authentication authentication, String targetType, String permission) {
        String privilege = targetType + "_" + permission;
        for (GrantedAuthority grantedAuthority : authentication.getAuthorities()) {
            if (grantedAuthority.getAuthority().equals(privilege)) {
                return true;
            }
        }
        return false;
    }

}

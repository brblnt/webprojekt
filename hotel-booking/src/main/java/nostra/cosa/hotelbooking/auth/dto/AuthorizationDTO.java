package nostra.cosa.hotelbooking.auth.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.List;
import java.util.stream.Collectors;

/**
 * UserPrincipal used for Authorization.
 */
@Setter
@Getter
public class AuthorizationDTO extends User {

    private transient AuthenticationDataDTO authData;

    public AuthorizationDTO(AuthenticationDataDTO authData, String userName, String password) {
        super(userName, password, getGrantedAuthorities(authData));
        this.authData = authData;
    }

    private static List<GrantedAuthority> getGrantedAuthorities(AuthenticationDataDTO authenticationData) {
        List<String> permissions = authenticationData.getPermissionDTO().getAllPermissions();
        return permissions.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }
}

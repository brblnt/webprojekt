package nostra.cosa.hotelbooking.auth.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.List;
import java.util.stream.Collectors;

@Setter
@Getter
@EqualsAndHashCode(callSuper = false)
public class UserPrincipal extends User {

    private transient AuthenticationDataDTO authData;

    public UserPrincipal(AuthenticationDataDTO authData, String userName, String password) {
        super(userName, password, getAuthorities(authData));
        this.authData = authData;
    }

    private static List<GrantedAuthority> getAuthorities(AuthenticationDataDTO authData) {
        List<String> permission = authData.getPermission().getAllPermissions();
        return permission.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }

}

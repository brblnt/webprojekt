package nostra.cosa.hotelbooking.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;
import nostra.cosa.hotelbooking.auth.entity.Permission;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;

import java.util.ArrayList;
import java.util.List;

/**
 * Permission DTO for permissions.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PermissionDTO {

    private List<String> applicationUser;

    private List<String> accommodation;

    private List<String> admin;

    public PermissionDTO(AuthenticationData authenticationData) {
        apply(authenticationData);
    }

    private void apply(AuthenticationData authenticationData) {
        List<String> permissions = authenticationData.getPermissions().stream().map(Permission::getRole).toList();
        switch (authenticationData.getPermissions().get(0).getRoleType()) {
            case APPLICATION_USER -> this.applicationUser = permissions;
            case ACCOMMODATION -> this.accommodation = permissions;
            case ADMIN -> this.admin = permissions;
        }
    }

    public List<String> getAllPermissions() {
        List<String> result = new ArrayList<>();
        if (applicationUser != null) {
            applicationUser.forEach(role -> result.add(Role.APPLICATION_USER + "_" + role));
        }
        if (accommodation != null) {
            accommodation.forEach(role -> result.add(Role.ACCOMMODATION + "_" + role));
        }
        if (admin != null) {
            admin.forEach(role -> result.add(Role.ADMIN + "_"  + role));
        }
        return result;
    }

}

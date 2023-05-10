package nostra.cosa.hotelbooking.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;

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

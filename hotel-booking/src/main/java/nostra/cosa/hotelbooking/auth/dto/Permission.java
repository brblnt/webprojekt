package nostra.cosa.hotelbooking.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Permission {

    private List<String> applicationUser;

    private List<String> accommodation;

    private List<String> admin;

    public List<String> getAllPermissions() {
        List<String> result = new ArrayList<>();
        applicationUser.forEach(role -> result.add(Role.APPLICATION_USER + "_" + role));
        accommodation.forEach(role -> result.add(Role.ACCOMMODATION + "_" + role));
        admin.forEach(role -> result.add(Role.ADMIN + "_"  + role));
        return result;
    }

}

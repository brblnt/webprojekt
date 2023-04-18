package nostra.cosa.hotelbooking.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
        applicationUser.forEach(role -> result.add("APPLICATIONUSER_" + role));
        accommodation.forEach(role -> result.add("ACCOMMODATION_" + role));
        admin.forEach(role -> result.add("ADMIN_" + role));
        return result;
    }

}

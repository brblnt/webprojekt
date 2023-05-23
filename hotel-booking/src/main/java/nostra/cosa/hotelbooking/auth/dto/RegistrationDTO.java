package nostra.cosa.hotelbooking.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationDTO {

    public static final String FIELD_NAME_USERNAME = "userName";

    public static final String FIELD_NAME_PASSWORD = "password";

    public static final String FIELD_NAME_ROLE = "role";

    private String userName;

    private String password;

    private String role;
}

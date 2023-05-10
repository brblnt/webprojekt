package nostra.cosa.hotelbooking.auth.validation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationValidationError {

    private String fieldName;

    private String value;

    private String message;
}

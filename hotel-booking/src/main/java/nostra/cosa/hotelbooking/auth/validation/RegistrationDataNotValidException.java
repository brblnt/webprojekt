package nostra.cosa.hotelbooking.auth.validation;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RegistrationDataNotValidException extends Exception {

    private List<RegistrationValidationError> validationErrors;
}

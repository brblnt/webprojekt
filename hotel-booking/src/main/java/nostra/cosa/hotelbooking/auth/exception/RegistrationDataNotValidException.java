package nostra.cosa.hotelbooking.auth.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import nostra.cosa.hotelbooking.auth.validation.RegistrationValidationError;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RegistrationDataNotValidException extends Exception {

    private List<RegistrationValidationError> validationErrors;
}

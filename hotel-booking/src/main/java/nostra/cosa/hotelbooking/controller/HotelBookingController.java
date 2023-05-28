package nostra.cosa.hotelbooking.controller;

import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.exception.InvalidLoginDetailsException;
import nostra.cosa.hotelbooking.auth.exception.RegistrationDataNotValidException;
import nostra.cosa.hotelbooking.auth.validation.RegistrationValidationError;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;

@Slf4j
public class HotelBookingController {

    private static final String VALIDATION_ERROR_TEMPLATE = "ValidationError: fieldName: {}, value: {}, message: {}";

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<Void> handleNotFoundException(NotFoundException e) {
        log.warn(e.getMessage());
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(RegistrationDataNotValidException.class)
    public ResponseEntity<List<RegistrationValidationError>> handleRegistrationDataNotValidException(RegistrationDataNotValidException e) {
        for (RegistrationValidationError validationError : e.getValidationErrors()) {
            log.warn(VALIDATION_ERROR_TEMPLATE, validationError.getFieldName(), validationError.getValue(), validationError.getMessage());
        }
        return ResponseEntity.badRequest().body(e.getValidationErrors());
    }

    @ExceptionHandler(InvalidLoginDetailsException.class)
    public ResponseEntity<String> handleRegistrationDataNotValidException(InvalidLoginDetailsException e) {
        log.warn("Login: {}", e.getMessage());
        return ResponseEntity.status(401).body(e.getMessage());
    }
}

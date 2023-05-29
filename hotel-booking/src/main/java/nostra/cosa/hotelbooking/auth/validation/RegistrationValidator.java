package nostra.cosa.hotelbooking.auth.validation;

import static nostra.cosa.hotelbooking.auth.constants.ValidationConstants.*;
import static nostra.cosa.hotelbooking.auth.dto.RegistrationDTO.*;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.dto.RegistrationDTO;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;
import nostra.cosa.hotelbooking.service.service.impl.AuthenticationServiceImpl;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RegistrationValidator {

    private final AuthenticationServiceImpl authenticationService;

    public List<RegistrationValidationError> validate(final RegistrationDTO registrationDTO) {
        List<RegistrationValidationError> validationErrors = new ArrayList<>();
        validateUserName(registrationDTO, validationErrors);
        validatePassword(registrationDTO, validationErrors);
        validateRole(registrationDTO, validationErrors);
        return validationErrors;
    }

    private void validateUserName(final RegistrationDTO registrationDTO, final List<RegistrationValidationError> validationErrors) {
        final String userName = registrationDTO.getUserName();
        if (userName == null || userName.isEmpty()) {
            validationErrors.add(new RegistrationValidationError(FIELD_NAME_USERNAME, null, USERNAME_NULL));
        } else if (authenticationService.existsByUserName(userName)) {
            validationErrors.add(new RegistrationValidationError(FIELD_NAME_USERNAME, userName, USERNAME_ALREADY_EXISTS));
        } else if (userName.length() < 3 || userName.length() > 24){
            validationErrors.add(new RegistrationValidationError(FIELD_NAME_USERNAME, userName, USERNAME_LENGTH));
        } else if (Character.isDigit(userName.charAt(0))) {
            validationErrors.add(new RegistrationValidationError(FIELD_NAME_USERNAME, userName, USERNAME_STARTS_WITH_NUMBER));
        }
    }

    private void validatePassword(final RegistrationDTO registrationDTO, final List<RegistrationValidationError> validationErrors) {
        final String password = registrationDTO.getPassword();
        if (password == null || password.isEmpty()) {
            validationErrors.add(new RegistrationValidationError(FIELD_NAME_PASSWORD, null, PASSWORD_NULL));
        } else if (!PASSWORD_PATTERN.matcher(password).matches()) {
            validationErrors.add(new RegistrationValidationError(FIELD_NAME_PASSWORD, password, PASSWORD_NOT_VALID));
        }
    }

    private void validateRole(final RegistrationDTO registrationDTO, final List<RegistrationValidationError> validationErrors) {
        final String role = registrationDTO.getRole();
        if (role == null || role.isEmpty()) {
            validationErrors.add(new RegistrationValidationError(FIELD_NAME_ROLE, null, ROLE_NULL));
        } else if (!isValidRole(role)){
            validationErrors.add(new RegistrationValidationError(FIELD_NAME_ROLE, role, ROLE_UNDEFINED));
        }
    }

    private Boolean isValidRole(String role) {
        for (Role r : Role.values()) {
            if (r.name().equals(role)) {
                return true;
            }
        }
        return false;
    }
}

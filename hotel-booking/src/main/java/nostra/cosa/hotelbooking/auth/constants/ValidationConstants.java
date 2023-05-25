package nostra.cosa.hotelbooking.auth.constants;

import java.util.regex.Pattern;

public class ValidationConstants {

    private ValidationConstants(){
    }

    public static final String USERNAME_NULL = "Username must not be null";
    public static final String USERNAME_STARTS_WITH_NUMBER = "Username must not start with a number";
    public static final String USERNAME_ALREADY_EXISTS = "User with this username already exists";
    public static final String USERNAME_LENGTH = "Username must be between 3 and 24";
    public static final String ROLE_NULL = "Role must not be null";
    public static final String ROLE_UNDEFINED = "Undefined role";
    public static final String PASSWORD_NULL = "Password must not be null";
    public static final String PASSWORD_NOT_VALID = "Password must contain at least eight characters, one uppercase letter, one lowercase letter and one number";
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    public static final Pattern PASSWORD_PATTERN = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$");
}

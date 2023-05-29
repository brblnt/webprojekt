package nostra.cosa.hotelbooking.auth.exception;

public class InvalidLoginDetailsException extends Exception {

    private static final String INVALID_LOGIN_DETAILS = "Invalid UserName or Password!";

    public InvalidLoginDetailsException() {
        super(INVALID_LOGIN_DETAILS);
    }
}

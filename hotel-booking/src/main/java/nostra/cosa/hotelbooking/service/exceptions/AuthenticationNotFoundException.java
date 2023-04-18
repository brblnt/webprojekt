package nostra.cosa.hotelbooking.service.exceptions;

/**
 * Authentication not found exception.
 */
public class AuthenticationNotFoundException extends Exception {

  public AuthenticationNotFoundException() {
  }

  public AuthenticationNotFoundException(String message) {
    super(message);
  }

}

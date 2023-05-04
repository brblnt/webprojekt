package nostra.cosa.hotelbooking.service.util;

import org.springframework.stereotype.Component;

/**
 * Common util methods.
 */
@Component
public class Utilities {

  public static <T> T checkNull(final T defaultValue, final T newValue) {
    return newValue == null ? defaultValue : newValue;
  }

}

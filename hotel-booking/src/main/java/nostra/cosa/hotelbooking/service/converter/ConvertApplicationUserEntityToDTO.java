package nostra.cosa.hotelbooking.service.converter;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.ApplicationUser;
import nostra.cosa.hotelbooking.service.dto.ApplicationUserDTO;
import nostra.cosa.hotelbooking.service.exceptions.AuthenticationNotFoundException;
import nostra.cosa.hotelbooking.service.util.AddressUtilities;
import nostra.cosa.hotelbooking.service.util.AuthenticationUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert ApplicationUser to ApplicationUserDTO.
 */
@Component
@RequiredArgsConstructor
public class ConvertApplicationUserEntityToDTO implements Converter<ApplicationUser, ApplicationUserDTO> {

  private final AuthenticationUtilities authenticationUtilities;

  @Override
  public ApplicationUserDTO convert(ApplicationUser source) {
    try {
      return new ApplicationUserDTO(
              source.getId(),
              authenticationUtilities.getAuthenticationDataDTOById(source.getAuthenticationId()),
              source.getFirstName(),
              source.getLastName(),
              source.getEmailAddress(),
              source.getPhoneNumber()
      );
    } catch (AuthenticationNotFoundException e) {
      throw new RuntimeException(e);
    }
  }

}

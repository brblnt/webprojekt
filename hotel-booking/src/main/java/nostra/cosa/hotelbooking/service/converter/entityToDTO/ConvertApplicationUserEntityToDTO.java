package nostra.cosa.hotelbooking.service.converter.entityToDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.data.entity.ApplicationUser;
import nostra.cosa.hotelbooking.service.dto.ApplicationUserDTO;
import nostra.cosa.hotelbooking.service.exceptions.AuthenticationNotFoundException;
import nostra.cosa.hotelbooking.service.util.data.AuthenticationUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert ApplicationUser to ApplicationUserDTO.
 */
@Component
@RequiredArgsConstructor
@Slf4j
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
      log.error("Authentication not found with id : {}, message : {}", source.getAuthenticationId(), e);
      throw new RuntimeException(e);
    }
  }

}

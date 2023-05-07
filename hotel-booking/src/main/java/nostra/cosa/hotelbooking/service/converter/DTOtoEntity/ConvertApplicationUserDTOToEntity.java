package nostra.cosa.hotelbooking.service.converter.DTOtoEntity;

import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.data.entity.ApplicationUser;
import nostra.cosa.hotelbooking.service.dto.ApplicationUserDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert ApplicationUserDTO to ApplicationUser.
 */
@Component
@Slf4j
public class ConvertApplicationUserDTOToEntity implements Converter<ApplicationUserDTO, ApplicationUser> {


  @Override
  public ApplicationUser convert(ApplicationUserDTO source) {
    return new ApplicationUser(
            source.getId(),
            source.getAuthenticationData().getId(),
            source.getFirstName(),
            source.getLastName(),
            source.getEmailAddress(),
            source.getPhoneNumber()
    );
  }

}

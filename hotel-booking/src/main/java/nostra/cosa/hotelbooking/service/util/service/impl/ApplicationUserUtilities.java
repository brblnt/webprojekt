package nostra.cosa.hotelbooking.service.util.service.impl;

import static nostra.cosa.hotelbooking.service.util.Utilities.checkNull;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.service.dto.ApplicationUserDTO;
import nostra.cosa.hotelbooking.service.util.service.UtilitiesForService;
import org.springframework.stereotype.Service;

/**
 * Accommodation Utilities.
 */
@Service
@RequiredArgsConstructor
public class ApplicationUserUtilities implements UtilitiesForService<ApplicationUserDTO> {


  @Override
  public ApplicationUserDTO update(ApplicationUserDTO oldDTO, ApplicationUserDTO newDTO) {
    return new ApplicationUserDTO(
            oldDTO.getId(),
            checkNull(oldDTO.getAuthenticationData(), newDTO.getAuthenticationData()),
            checkNull(oldDTO.getFirstName(), newDTO.getFirstName()),
            checkNull(oldDTO.getLastName(), newDTO.getLastName()),
            checkNull(oldDTO.getEmailAddress(), newDTO.getEmailAddress()),
            checkNull(oldDTO.getPhoneNumber(), newDTO.getPhoneNumber())
    );
  }

}

package nostra.cosa.hotelbooking.service.util.service.impl;

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
    return null; //TODO
  }

}

package nostra.cosa.hotelbooking.service.util.service.impl;

import static nostra.cosa.hotelbooking.service.util.Utilities.checkNull;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import nostra.cosa.hotelbooking.service.util.service.UtilitiesForService;
import org.springframework.stereotype.Service;

/**
 * Accommodation Utilities.
 */
@Service
@RequiredArgsConstructor
public class AccommodationUtilities implements UtilitiesForService<AccommodationDTO> {

  @Override
  public AccommodationDTO update(AccommodationDTO oldDTO, AccommodationDTO newDTO) {
    return new AccommodationDTO(
            oldDTO.getId(),
            checkNull(oldDTO.getAuthenticationData(), newDTO.getAuthenticationData()),
            checkNull(oldDTO.getAddress(), newDTO.getAddress()),
            checkNull(oldDTO.getEmailAddress(), newDTO.getEmailAddress()),
            checkNull(oldDTO.getPhoneNumber(), newDTO.getPhoneNumber()),
            checkNull(oldDTO.getAccommodationType(), newDTO.getAccommodationType()),
            checkNull(oldDTO.getServiceTypes(), newDTO.getServiceTypes()),
            checkNull(oldDTO.getRooms(), newDTO.getRooms())
    );
  }

}

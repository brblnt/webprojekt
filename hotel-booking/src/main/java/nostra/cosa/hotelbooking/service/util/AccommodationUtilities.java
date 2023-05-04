package nostra.cosa.hotelbooking.service.util;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import org.springframework.stereotype.Service;

/**
 * Accommodation Utilities.
 */
@Service
@RequiredArgsConstructor
public class AccommodationUtilities {

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

  private <T> T checkNull(final T defaultValue, final T newValue) {
    return newValue == null ? defaultValue : newValue;
  }

}

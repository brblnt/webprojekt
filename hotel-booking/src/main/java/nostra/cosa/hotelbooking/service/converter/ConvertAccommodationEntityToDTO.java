package nostra.cosa.hotelbooking.service.converter;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.Accommodation;
import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import nostra.cosa.hotelbooking.service.exceptions.AuthenticationNotFoundException;
import nostra.cosa.hotelbooking.service.util.AddressUtilities;
import nostra.cosa.hotelbooking.service.util.AuthenticationUtilities;
import nostra.cosa.hotelbooking.service.util.RoomUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert Accommodation to AccommodationDTO.
 */
@Component
@RequiredArgsConstructor
public class ConvertAccommodationEntityToDTO implements Converter<Accommodation, AccommodationDTO> {

  private final AuthenticationUtilities authenticationUtilities;
  private final AddressUtilities addressUtilities;
  private final RoomUtilities roomUtilities;

  @Override
  public AccommodationDTO convert(Accommodation source) {
    try {
      return new AccommodationDTO(
              source.getId(),
              authenticationUtilities.getAuthenticationDataDTOById(source.getAuthenticationId()),
              addressUtilities.getAddressById(source.getAddressId()),
              source.getEmailAddress(),
              source.getPhoneNumber(),
              source.getAccommodationType(),
              source.getServiceTypes(),
              roomUtilities.getRoomDTOsByIdList(source.getRoomIds())
      );
    } catch (AuthenticationNotFoundException e) {
      throw new RuntimeException(e);
    }
  }
}

package nostra.cosa.hotelbooking.service.converter.entityToDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.data.entity.Accommodation;
import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import nostra.cosa.hotelbooking.service.exceptions.AuthenticationNotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.AddressServiceImpl;
import nostra.cosa.hotelbooking.service.util.data.AddressUtilities;
import nostra.cosa.hotelbooking.service.util.data.AuthenticationUtilities;
import nostra.cosa.hotelbooking.service.util.data.RoomUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert Accommodation to AccommodationDTO.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class ConvertAccommodationEntityToDTO implements Converter<Accommodation, AccommodationDTO> {

  private final AuthenticationUtilities authenticationUtilities;
  private final AddressServiceImpl addressService;
  private final RoomUtilities roomUtilities;

  @Override
  public AccommodationDTO convert(Accommodation source) {
    try {
      return new AccommodationDTO(
              source.getId(),
              authenticationUtilities.getAuthenticationDataDTOById(source.getAuthenticationId()),
              source.getAccommodationName(),
              addressService.getById(source.getAddressId()),
              source.getEmailAddress(),
              source.getPhoneNumber(),
              source.getAccommodationType(),
              source.getServiceTypes(),
              roomUtilities.getRoomDTOsByIdList(source.getRoomIds())
      );
    } catch (AuthenticationNotFoundException e) {
      log.error("Authentication not found with id : {}, message : {}", source.getAuthenticationId(), e);
      throw new RuntimeException(e);
    }
  }
}

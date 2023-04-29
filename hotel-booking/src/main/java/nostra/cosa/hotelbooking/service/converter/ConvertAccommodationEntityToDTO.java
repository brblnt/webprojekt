package nostra.cosa.hotelbooking.service.converter;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
@Slf4j
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
      log.error("Authentication not found with id : {}, message : {}", source.getAuthenticationId(), e);
      throw new RuntimeException(e);
    }
  }

  //TODO: Ezt majd átteszed oda, ahova szeretnéd
  public AccommodationDTO update(final AccommodationDTO defaultValue, final AccommodationDTO newValue) {
    final AccommodationDTO result = new AccommodationDTO();

    result.setId(defaultValue.getId());
    result.setAuthenticationData(getValue(defaultValue.getAuthenticationData(), newValue.getAuthenticationData()));
    result.setAddress(getValue(defaultValue.getAddress(), newValue.getAddress()));
    result.setEmailAddress(getValue(defaultValue.getEmailAddress(), newValue.getEmailAddress()));
    result.setPhoneNumber(getValue(defaultValue.getPhoneNumber(), newValue.getPhoneNumber()));
    result.setAccommodationType(getValue(defaultValue.getAccommodationType(), newValue.getAccommodationType()));
    result.setServiceTypes(getValue(defaultValue.getServiceTypes(), newValue.getServiceTypes()));
    result.setRooms(getValue(defaultValue.getRooms(), newValue.getRooms()));

    return result;
  }

  private <T> T getValue(final T defaultValue, final T newValue) {
    return newValue == null ? defaultValue : newValue;
  }
}

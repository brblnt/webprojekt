package nostra.cosa.hotelbooking.service.converter.DTOtoEntity;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.data.entity.Accommodation;
import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import nostra.cosa.hotelbooking.service.util.data.RoomUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert AccommodationDTO to Accommodation.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class ConvertAccommodationDTOToEntity implements Converter<AccommodationDTO, Accommodation> {

  private final RoomUtilities roomUtilities;

  @Override
  public Accommodation convert(AccommodationDTO source) {
    return new Accommodation(
            source.getId(),
            source.getAuthenticationData().getId(),
            source.getAccommodationName(),
            source.getAddress().getAddressId(),
            source.getEmailAddress(),
            source.getPhoneNumber(),
            source.getAccommodationType(),
            source.getImagePath(),
            source.getDescription(),
            source.getServiceTypes(),
            roomUtilities.getIdsByRoomDTOs(source.getRooms())
    );
  }
}

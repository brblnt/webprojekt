package nostra.cosa.hotelbooking.service.converter.entityToDTO;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.Booking;
import nostra.cosa.hotelbooking.service.dto.BookingDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.impl.AccommodationServiceImpl;
import nostra.cosa.hotelbooking.service.service.impl.ApplicationUserServiceImpl;
import nostra.cosa.hotelbooking.service.service.impl.RoomServiceImpl;
import nostra.cosa.hotelbooking.service.util.data.RoomUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert Booking to BookingDTO.
 */
@Component
@RequiredArgsConstructor
public class ConvertBookingEntityToDTO implements Converter<Booking, BookingDTO> {

  private final AccommodationServiceImpl accommodationService;
  private final ApplicationUserServiceImpl applicationUserService;
  private final RoomServiceImpl roomService;


  @Override
  public BookingDTO convert(Booking source) {
    try {
      return new BookingDTO(
              source.getId(),
              applicationUserService.getById(source.getUserId()),
              accommodationService.getById(source.getAccommodationId()),
              roomService.getById(source.getRoomId()),
              source.getStartDate(),
              source.getFinishDate(),
              source.getServiceType(),
              source.getArchived(),
              source.getResigned(),
              source.getPayed(),
              source.getOther()
      );
    } catch (NotFoundException e) {
      throw new RuntimeException(e);
    }
  }

}

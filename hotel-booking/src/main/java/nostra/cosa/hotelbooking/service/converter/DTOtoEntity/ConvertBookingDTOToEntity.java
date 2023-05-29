package nostra.cosa.hotelbooking.service.converter.DTOtoEntity;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.Booking;
import nostra.cosa.hotelbooking.service.dto.BookingDTO;
import nostra.cosa.hotelbooking.service.service.impl.AccommodationServiceImpl;
import nostra.cosa.hotelbooking.service.service.impl.ApplicationUserServiceImpl;
import nostra.cosa.hotelbooking.service.util.data.RoomUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert BookingDTO to Booking.
 */
@Component
public class ConvertBookingDTOToEntity implements Converter<BookingDTO, Booking> {


  @Override
  public Booking convert(BookingDTO source) {
    return new Booking(
            source.getId(),
            source.getUser().getId(),
            source.getAccommodation().getId(),
            source.getRoom().getId(),
            source.getDateStart(),
            source.getDateFinish(),
            source.getServiceType(),
            source.getArchived(),
            source.getResigned(),
            source.getPaid(),
            source.getOther()
    );
  }

}

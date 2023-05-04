package nostra.cosa.hotelbooking.service.util.service.impl;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.service.dto.BookingDTO;
import nostra.cosa.hotelbooking.service.util.service.UtilitiesForService;
import org.springframework.stereotype.Service;

/**
 * Booking Utilities.
 */
@Service
@RequiredArgsConstructor
public class BookingUtilities implements UtilitiesForService<BookingDTO> {

  @Override
  public BookingDTO update(BookingDTO oldDTO, BookingDTO newDTO) {
    return null; //TODO
  }


}

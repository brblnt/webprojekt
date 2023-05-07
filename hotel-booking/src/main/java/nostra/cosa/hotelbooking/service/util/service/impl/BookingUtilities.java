package nostra.cosa.hotelbooking.service.util.service.impl;

import static nostra.cosa.hotelbooking.service.util.Utilities.checkNull;

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
    return new BookingDTO(
            oldDTO.getId(),
            checkNull(oldDTO.getUser(), newDTO.getUser()),
            checkNull(oldDTO.getAccommodation(), newDTO.getAccommodation()),
            checkNull(oldDTO.getRoom(), newDTO.getRoom()),
            checkNull(oldDTO.getDateStart(), newDTO.getDateStart()),
            checkNull(oldDTO.getDateFinish(), newDTO.getDateFinish()),
            checkNull(oldDTO.getServiceType(), newDTO.getServiceType()),
            checkNull(oldDTO.getArchived(), newDTO.getArchived()),
            checkNull(oldDTO.getResigned(), newDTO.getResigned()),
            checkNull(oldDTO.getPayed(), newDTO.getPayed()),
            checkNull(oldDTO.getOther(), newDTO.getOther())
    );
  }


}

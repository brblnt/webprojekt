package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.ApplicationUser;
import nostra.cosa.hotelbooking.data.entity.Booking;
import nostra.cosa.hotelbooking.data.repository.ApplicationUserRepository;
import nostra.cosa.hotelbooking.data.repository.BookingRepository;
import nostra.cosa.hotelbooking.service.dto.ApplicationUserDTO;
import nostra.cosa.hotelbooking.service.dto.BookingDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;

/**
 * Booking Service class, implements ServiceInterface with BookingDTO.
 */
@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService<BookingDTO> {

  private final BookingRepository bookingRepository;
  private final Converter<Booking, BookingDTO> convertBookingEntityToDTO;

  @Override
  public List<BookingDTO> getAll() {
    return bookingRepository.findAll().stream()
            .map(convertBookingEntityToDTO::convert)
            .toList();
  }

  @Override
  public BookingDTO getById(Long id) throws NotFoundException {
    return bookingRepository.findById(id)
            .map(convertBookingEntityToDTO::convert)
            .orElseThrow(() -> new NotFoundException("There is no Booking with ID:" + id));
  }

  @Override
  public BookingDTO update(BookingDTO newAccommodation) {
    return null;
  }

  @Override
  public BookingDTO create(BookingDTO newAccommodation) {
    return null;
  }

  @Override
  public Boolean delete(Long id) {
    try {
      bookingRepository.deleteById(id);
      return true;
    } catch (Exception e) { // TODO: egyenlőre nem találtam konkrétabbat ha később lenne itt hagyom a todot
      return false;
    }
  }
}

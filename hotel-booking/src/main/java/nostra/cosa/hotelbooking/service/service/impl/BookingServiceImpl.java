package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.data.entity.ApplicationUser;
import nostra.cosa.hotelbooking.data.entity.Booking;
import nostra.cosa.hotelbooking.data.repository.ApplicationUserRepository;
import nostra.cosa.hotelbooking.data.repository.BookingRepository;
import nostra.cosa.hotelbooking.service.dto.ApplicationUserDTO;
import nostra.cosa.hotelbooking.service.dto.BookingDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import nostra.cosa.hotelbooking.service.util.service.impl.BookingUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;

/**
 * Booking Service class, implements ServiceInterface with BookingDTO.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class BookingServiceImpl implements BookingService<BookingDTO> {

  private final BookingRepository bookingRepository;
  private final BookingUtilities bookingUtilities;
  private final Converter<Booking, BookingDTO> convertBookingEntityToDTO;
  private final Converter<BookingDTO, Booking> convertBookingDTOToEntity;

  @Override
  public List<BookingDTO> getAll() {
    log.info("Get all BookingDTOs.");
    return bookingRepository.findAll().stream()
            .map(convertBookingEntityToDTO::convert)
            .toList();
  }

  @Override
  public BookingDTO getById(Long id) throws NotFoundException {
    log.info("Get BookingDTO by id : {}", id);
    return bookingRepository.findById(id)
            .map(convertBookingEntityToDTO::convert)
            .orElseThrow(() -> new NotFoundException("There is no Booking with ID:" + id));
  }

  public List<BookingDTO> getAllByUserId(Long id) throws NotFoundException  {
    log.info("Get all BookingDTOs by user id: {}", id);
    return bookingRepository.findAllByUserID(id).stream()
            .map(convertBookingEntityToDTO::convert)
            .toList();
  }

  public List<BookingDTO> getAllByAccommodationId(Long id) throws NotFoundException  {
    log.info("Get all BookingDTOs by accommodation id: {}", id);
    return bookingRepository.findAllByAccommodationID(id).stream()
            .map(convertBookingEntityToDTO::convert)
            .toList();
  }


  @Override
  public BookingDTO update(BookingDTO newBooking) throws NotFoundException {
    return create(
            bookingUtilities.update(
                    getById(newBooking.getId()),
                    newBooking));
  }

  @Override
  public BookingDTO create(BookingDTO newBooking) {
    return convertBookingEntityToDTO.convert(
            bookingRepository.save(convertBookingDTOToEntity.convert(newBooking)));
  }

  @Override
  public Boolean delete(Long id) {
    try {
      bookingRepository.deleteById(id);
      return true;
    } catch (IllegalArgumentException e) {
      log.warn("Data integrity violation [DELETE]");
      return false;
    }
  }
}

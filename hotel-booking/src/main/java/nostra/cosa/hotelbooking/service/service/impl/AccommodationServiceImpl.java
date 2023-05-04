package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.data.entity.Accommodation;
import nostra.cosa.hotelbooking.data.repository.AccommodationRepository;
import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import nostra.cosa.hotelbooking.service.util.service.impl.AccommodationUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;

/**
 * Accommodation Service class, implements ServiceInterface with AccommodationDTO.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AccommodationServiceImpl implements BookingService<AccommodationDTO> {

  private final AccommodationRepository accommodationRepository;
  private final AccommodationUtilities accommodationUtilities;
  private final Converter<Accommodation, AccommodationDTO> convertAccommodationEntityToDTO;

  @Override
  public List<AccommodationDTO> getAll() {
    log.info("Get all AccommodationDTOs.");
    return accommodationRepository.findAll().stream()
            .map(convertAccommodationEntityToDTO::convert)
            .toList();
  }

  @Override
  public AccommodationDTO getById(Long id) throws NotFoundException {
    log.info("Get AccommodationDTO by id : {}", id);
    return accommodationRepository.findById(id)
            .map(convertAccommodationEntityToDTO::convert)
            .orElseThrow(() -> new NotFoundException("There is no Accommodation with ID:" + id));
  }

  @Override
  public AccommodationDTO update(AccommodationDTO newAccommodation) throws NotFoundException {
    return create(
            accommodationUtilities.update(
                    getById(newAccommodation.getId()),
                    newAccommodation));   //TODO: szétszedés?
  }

  @Override
  public AccommodationDTO create(AccommodationDTO newAccommodation) {
    return null;
  }

  @Override
  public Boolean delete(Long id) {
    try {
      accommodationRepository.deleteById(id);
      return true;
    } catch (IllegalArgumentException e) {
      log.warn("Data integrity violation [DELETE]");
      return false;
    }
  }
}

package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import nostra.cosa.hotelbooking.service.service.ServiceInterface;
import org.springframework.stereotype.Service;

/**
 * Accommodation Service class, implements ServiceInterface with AccommodationDTO.
 */
@Service
public class AccommodationService implements ServiceInterface<AccommodationDTO> {

  @Override
  public List<AccommodationDTO> getAll() {
    return null;
  }

  @Override
  public AccommodationDTO getById(Long id) {
    return null;
  }

  @Override
  public AccommodationDTO update(AccommodationDTO newAccommodation) {
    return null;
  }

  @Override
  public AccommodationDTO create(AccommodationDTO newAccommodation) {
    return null;
  }

  @Override
  public void delete(Long id) {

  }
}

package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.Accommodation;
import nostra.cosa.hotelbooking.data.entity.ApplicationUser;
import nostra.cosa.hotelbooking.data.repository.AccommodationRepository;
import nostra.cosa.hotelbooking.data.repository.ApplicationUserRepository;
import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import nostra.cosa.hotelbooking.service.dto.ApplicationUserDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;

/**
 * Application Service class, implements ServiceInterface with ApplicationUserDTO.
 */
@Service
@RequiredArgsConstructor
public class ApplicationUserServiceImpl implements BookingService<ApplicationUserDTO> {

  private final ApplicationUserRepository applicationUserRepository;
  private final Converter<ApplicationUser, ApplicationUserDTO> convertApplicationUserEntityToDTO;

  @Override
  public List<ApplicationUserDTO> getAll() {
    return applicationUserRepository.findAll().stream()
            .map(convertApplicationUserEntityToDTO::convert)
            .toList();
  }

  @Override
  public ApplicationUserDTO getById(Long id) throws NotFoundException {
    return applicationUserRepository.findById(id)
            .map(convertApplicationUserEntityToDTO::convert)
            .orElseThrow(() -> new NotFoundException("There is no ApplicationUser with ID:" + id));
  }

  @Override
  public ApplicationUserDTO update(ApplicationUserDTO newAccommodation) {
    return null;
  }

  @Override
  public ApplicationUserDTO create(ApplicationUserDTO newAccommodation) {
    return null;
  }

  @Override
  public boolean delete(Long id) {
    try {
      applicationUserRepository.deleteById(id);
      return true;
    } catch (Exception e) { // TODO: legyen konkrétabb exception?
      return false;
    }
  }
}

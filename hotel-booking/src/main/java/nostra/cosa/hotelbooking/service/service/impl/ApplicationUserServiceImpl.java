package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.data.entity.ApplicationUser;
import nostra.cosa.hotelbooking.data.repository.ApplicationUserRepository;
import nostra.cosa.hotelbooking.service.dto.ApplicationUserDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import nostra.cosa.hotelbooking.service.util.service.impl.ApplicationUserUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Service;

/**
 * Application Service class, implements ServiceInterface with ApplicationUserDTO.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class ApplicationUserServiceImpl implements BookingService<ApplicationUserDTO> {


  private final ApplicationUserRepository applicationUserRepository;
  private final ApplicationUserUtilities applicationUserUtilities;
  private final Converter<ApplicationUser, ApplicationUserDTO> convertApplicationUserEntityToDTO;
  private final Converter<ApplicationUserDTO, ApplicationUser> convertApplicationUserDTOToEntity;

  private final InMemoryUserDetailsManager inMemoryUserDetailsManager;

  @Override
  public List<ApplicationUserDTO> getAll() {
    log.info("Get all ApplicationUserDTOs.");
    return applicationUserRepository.findAll().stream()
            .map(convertApplicationUserEntityToDTO::convert)
            .toList();
  }

  @Override
  public ApplicationUserDTO getById(Long id) throws NotFoundException {
    log.info("Get ApplicationUserDTO by id : {}", id);
    return applicationUserRepository.findById(id)
            .map(convertApplicationUserEntityToDTO::convert)
            .orElseThrow(() -> new NotFoundException("There is no ApplicationUser with ID:" + id));
  }

  public ApplicationUserDTO getUserByAuthId(Long id) throws NotFoundException {
    log.info("Get ApplicationUserDTO by auth id : {}", id);
    return applicationUserRepository.findByAuthenticationId(id)
            .map(convertApplicationUserEntityToDTO::convert)
            .orElseThrow(() -> new NotFoundException("There is no ApplicationUser with auth ID:" + id));
  }

  @Override
  public ApplicationUserDTO update(ApplicationUserDTO newApplicationUser) throws NotFoundException {
    return create(
            applicationUserUtilities.update(
                    getById(newApplicationUser.getId()),
                    newApplicationUser));
  }

  @Override
  public ApplicationUserDTO create(ApplicationUserDTO newApplicationUser) {
    return convertApplicationUserEntityToDTO.convert(
            applicationUserRepository.save(convertApplicationUserDTOToEntity.convert(newApplicationUser)));
  }

  @Override
  public Boolean delete(Long id) {
    try {
      final ApplicationUserDTO applicationUser = getById(id);
      inMemoryUserDetailsManager.deleteUser(applicationUser.getAuthenticationData().getUserName());
      applicationUserRepository.deleteById(id);
      return true;
    } catch (IllegalArgumentException | NotFoundException e) {
      log.warn("Data integrity violation [DELETE]");
      return false;
    }
  }
}

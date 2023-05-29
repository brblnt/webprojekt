package nostra.cosa.hotelbooking.service.service.impl;

import static nostra.cosa.hotelbooking.auth.constants.PermissionConstants.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.dto.PermissionDTO;
import nostra.cosa.hotelbooking.auth.dto.RegistrationDTO;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import nostra.cosa.hotelbooking.data.repository.AuthenticationRepository;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import nostra.cosa.hotelbooking.service.util.service.impl.AuthenticationUtilitiesService;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;

/**
 * Authentication Service class, implements ServiceInterface with AuthenticationDataDTOs.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AuthenticationServiceImpl implements BookingService<AuthenticationDataDTO> {

  private final AuthenticationUtilitiesService authenticationUtilities;
  private final AuthenticationRepository authenticationRepository;
  private final Converter<AuthenticationDataDTO, AuthenticationData> convertAuthenticationDTOToEntity;
  private final Converter<AuthenticationData, AuthenticationDataDTO> convertAuthenticationEntityToDTO;

  @Override
  public List<AuthenticationDataDTO> getAll() {
    log.info("Get all AuthenticationDTOs.");
    return authenticationRepository.findAll().stream()
            .map(convertAuthenticationEntityToDTO::convert)
            .toList();
  }

  @Override
  public AuthenticationDataDTO getById(Long id) throws NotFoundException {
    log.info("Get AuthenticationDTO by id : {}", id);
    return authenticationRepository.findById(id)
            .map(convertAuthenticationEntityToDTO::convert)
            .orElseThrow(() -> new NotFoundException("There is no AuthenticationDTO with ID:" + id));
  }

  public AuthenticationDataDTO getAuthenticationDataDTOByUserName(String userName) {
    return convertAuthenticationEntityToDTO.convert(authenticationRepository.findByUserName(userName));
  }


  public AuthenticationDataDTO getAuthenticationDataByToken(String token) {
    return convertAuthenticationEntityToDTO.convert(authenticationRepository.findByToken(token));
  }

  @Override
  public AuthenticationDataDTO update(AuthenticationDataDTO update) throws NotFoundException {
    return create(
            authenticationUtilities.update(
                    getById(update.getId()),
                    update));
  }

  @Override
  public AuthenticationDataDTO create(AuthenticationDataDTO create) {
    return convertAuthenticationEntityToDTO.convert(
            authenticationRepository.save(convertAuthenticationDTOToEntity.convert(create)));
  }

  public AuthenticationDataDTO toAuthenticationDataDTO(final RegistrationDTO registrationDTO, final String token) {
    final Role role = Role.valueOf(registrationDTO.getRole());
    return new AuthenticationDataDTO(null, registrationDTO.getUserName(),
            registrationDTO.getPassword(), role, new ArrayList<String>(), LocalDateTime.now().toString(),
            true, true, true, true, getPermissionsByRole(role), token);
  }

  public PermissionDTO getPermissionsByRole(final Role role) {
    final PermissionDTO permissionDTO = new PermissionDTO();
    if (Role.ADMIN.equals(role)) {
      permissionDTO.setAdmin(ADMIN_PERMISSIONS);
    }
    if (Role.APPLICATION_USER.equals(role)) {
      permissionDTO.setApplicationUser(APPLICATION_USER_PERMISSIONS);
    }
    if (Role.ACCOMMODATION.equals(role)) {
      permissionDTO.setAccommodation(ACCOMMODATION_PERMISSIONS);
    }
    return permissionDTO;
  }

  @Override
  public Boolean delete(Long id) {
    try {
      authenticationRepository.deleteById(id);
      return true;
    } catch (IllegalArgumentException e) {
      log.warn("Data integrity violation [DELETE]");
      return false;
    }
  }

  public Boolean existsByUserName(String userName) {
    return authenticationRepository.findByUserName(userName) != null;
  }
}



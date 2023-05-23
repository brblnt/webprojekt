package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import nostra.cosa.hotelbooking.data.repository.AuthenticationRepository;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;

/**
 * Authentication Service class, implements ServiceInterface with AuthenticationDataDTOs.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AuthenticationServiceImpl implements BookingService<AuthenticationDataDTO> {

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
    return convertAuthenticationEntityToDTO.convert(authenticationRepository.getByUserName(userName));
  }

  @Override
  public AuthenticationDataDTO update(AuthenticationDataDTO update) throws NotFoundException {
    return null; //TODO
  }

  @Override
  public AuthenticationDataDTO create(AuthenticationDataDTO create) {
    return convertAuthenticationEntityToDTO.convert(
            authenticationRepository.save(convertAuthenticationDTOToEntity.convert(create)));
  }

  /**
   * No implementation needed.
   */
  @Override
  public Boolean delete(Long id) {
    return null;
  }

}

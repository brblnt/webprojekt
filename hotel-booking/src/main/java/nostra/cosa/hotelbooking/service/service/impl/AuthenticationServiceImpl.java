package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import org.springframework.stereotype.Service;

/**
 * Authentication Service class, implements ServiceInterface with AuthenticationDataDTOs.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AuthenticationServiceImpl implements BookingService<AuthenticationDataDTO> {

  /**
   * No implementation needed.
   */
  @Override
  public List<AuthenticationDataDTO> getAll() {
    return null;
  }

  @Override
  public AuthenticationDataDTO getById(Long id) throws NotFoundException {
    return null;//TODO
  }

  @Override
  public AuthenticationDataDTO update(AuthenticationDataDTO update) throws NotFoundException {
    return null;//TODO
  }

  @Override
  public AuthenticationDataDTO create(AuthenticationDataDTO create) {
    return null;//TODO
  }

  /**
   * No implementation needed.
   */
  @Override
  public Boolean delete(Long id) {
    return null;
  }

}

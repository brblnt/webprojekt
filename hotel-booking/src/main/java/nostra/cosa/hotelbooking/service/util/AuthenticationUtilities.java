package nostra.cosa.hotelbooking.service.util;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.repository.AuthenticationRepository;
import nostra.cosa.hotelbooking.service.converter.ConvertAuthenticationDataEntityToDTO;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.service.exceptions.AuthenticationNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Authentication Utilities.
 */
@Service
@RequiredArgsConstructor
public class AuthenticationUtilities {

  private final AuthenticationRepository authenticationRepository;
  private final ConvertAuthenticationDataEntityToDTO convertAuthenticationDataEntityToDTO;

  public AuthenticationDataDTO getAuthenticationDataDTOById(Long id) throws AuthenticationNotFoundException {
    try {
      return convertAuthenticationDataEntityToDTO.convert(authenticationRepository.findById(id).get());
    } catch (Exception e) {
      throw new AuthenticationNotFoundException("AuthenticationData Not found!");
    }
  }

  //TODO
  public AuthenticationDataDTO getAuthenticationDataDTOByUserName(String userName) {
    return null;
  }
}

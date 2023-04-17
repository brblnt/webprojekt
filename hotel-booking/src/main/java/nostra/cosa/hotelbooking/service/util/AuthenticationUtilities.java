package nostra.cosa.hotelbooking.service.util;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.repository.AuthenticationRepository;
import nostra.cosa.hotelbooking.service.converter.ConvertAuthenticationDataToAuthenticationDataDTO;
import nostra.cosa.hotelbooking.service.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.service.exceptions.AuthenticationNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Authentication Utilities.
 */
@Service
@RequiredArgsConstructor
public class AuthenticationUtilities {

  private final AuthenticationRepository authenticationRepository;
  private final ConvertAuthenticationDataToAuthenticationDataDTO convertAuthenticationDataToAuthenticationDataDTO;

  public AuthenticationDataDTO getAuthenticationDataDTOById(Long id) throws AuthenticationNotFoundException {
    try {
      return convertAuthenticationDataToAuthenticationDataDTO.convert(authenticationRepository.findById(id).get());
    } catch (Exception e) {
      throw new AuthenticationNotFoundException("AuthenticationData Not found!");
    }
  }
}

package nostra.cosa.hotelbooking.service.util.data;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.constants.PermissionConstants;
import nostra.cosa.hotelbooking.auth.dto.PermissionDTO;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;
import nostra.cosa.hotelbooking.data.repository.AuthenticationRepository;
import nostra.cosa.hotelbooking.service.converter.entityToDTO.ConvertAuthenticationDataEntityToDTO;
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
    //TEMPORARY
    PermissionDTO permissionDTO = new PermissionDTO();
    permissionDTO.setAdmin(PermissionConstants.ADMIN_PERMISSIONS);
    return new AuthenticationDataDTO(1L, "admin", "password", Role.ADMIN, "2023.05.9",
            true, true, true, true, permissionDTO);
    //return null;
  }
}

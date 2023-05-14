package nostra.cosa.hotelbooking.service.util.data;

import static nostra.cosa.hotelbooking.auth.constants.PermissionConstants.*;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.dto.PermissionDTO;
import nostra.cosa.hotelbooking.auth.dto.RegistrationDTO;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;
import nostra.cosa.hotelbooking.data.repository.AuthenticationRepository;
import nostra.cosa.hotelbooking.service.converter.entityToDTO.ConvertAuthenticationDataEntityToDTO;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.service.exceptions.AuthenticationNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
    permissionDTO.setAdmin(ADMIN_PERMISSIONS);
    return new AuthenticationDataDTO(1L, "admin", "password", Role.ADMIN,"img-url", "2023.05.9",
            true, true, true, true, permissionDTO);
    //return null;
  }

  public AuthenticationDataDTO toAuthenticationDataDTO(final RegistrationDTO registrationDTO) {
    final Role role = Role.valueOf(registrationDTO.getRole());
    return new AuthenticationDataDTO(null, registrationDTO.getUserName(), registrationDTO.getPassword(), role, "", LocalDateTime.now().toString(), true, true, true, true, getPermissionsByRole(role));
  }

  //TODO
  public AuthenticationDataDTO saveUser(AuthenticationDataDTO authenticationDataDTO) {
    return null;
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
}

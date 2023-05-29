package nostra.cosa.hotelbooking.service.util.service.impl;

import static nostra.cosa.hotelbooking.service.util.Utilities.checkNull;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.service.util.service.UtilitiesForService;
import org.springframework.stereotype.Service;

/**
 * Authentication Utilities for service class.
 */
@Service
@RequiredArgsConstructor
public class AuthenticationUtilitiesService implements UtilitiesForService<AuthenticationDataDTO> {

  @Override
  public AuthenticationDataDTO update(AuthenticationDataDTO oldDTO, AuthenticationDataDTO newDTO) {
    return new AuthenticationDataDTO(
            oldDTO.getId(),
            checkNull(oldDTO.getUserName(), newDTO.getUserName()),
            checkNull(oldDTO.getPassword(), newDTO.getPassword()),
            checkNull(oldDTO.getRole(), newDTO.getRole()),
            checkNull(oldDTO.getImgPath(), newDTO.getImgPath()),
            checkNull(oldDTO.getRegistrationDate(), newDTO.getRegistrationDate()),
            checkNull(oldDTO.getAccountNonExpired(), newDTO.getAccountNonExpired()),
            checkNull(oldDTO.getAccountNonLocked(), newDTO.getAccountNonLocked()),
            checkNull(oldDTO.getAccountCredentialsNonExpired(), newDTO.getAccountCredentialsNonExpired()),
            checkNull(oldDTO.getAccountEnabled(), newDTO.getAccountEnabled()),
            checkNull(oldDTO.getPermissionDTO(), newDTO.getPermissionDTO()),
            checkNull(oldDTO.getToken(), newDTO.getToken())
    );
  }
}

package nostra.cosa.hotelbooking.service.converter.DTOtoEntity;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.entity.Permission;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert AuthenticationDataDTO to AuthenticationData via ModelMapper.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class ConvertAuthenticationDTOToEntity implements Converter<AuthenticationDataDTO, AuthenticationData> {

  private final ModelMapper modelMapper;

  @Override
  public AuthenticationData convert(AuthenticationDataDTO source) {
    AuthenticationData authenticationData = modelMapper.map(source, AuthenticationData.class);
    switch (authenticationData.getRole()) {
      case APPLICATION_USER -> authenticationData.setPermissions(source.getPermissionDTO().getApplicationUser().stream().map(value -> new Permission(authenticationData.getRole(), value)).toList());
      case ACCOMMODATION -> authenticationData.setPermissions(source.getPermissionDTO().getAccommodation().stream().map(value -> new Permission(authenticationData.getRole(), value)).toList());
      case ADMIN -> authenticationData.setPermissions(source.getPermissionDTO().getAdmin().stream().map(value -> new Permission(authenticationData.getRole(), value)).toList());
    }
    return authenticationData;
  }
}

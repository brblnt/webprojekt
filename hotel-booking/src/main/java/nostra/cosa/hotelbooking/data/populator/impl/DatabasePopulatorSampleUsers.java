package nostra.cosa.hotelbooking.data.populator.impl;


import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.constants.PermissionConstants;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.dto.PermissionDTO;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import nostra.cosa.hotelbooking.data.populator.DatabasePopulator;
import nostra.cosa.hotelbooking.data.repository.AuthenticationRepository;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DatabasePopulatorSampleUsers  implements DatabasePopulator {

  private final AuthenticationRepository authenticationRepository;
  private final Converter<AuthenticationDataDTO, AuthenticationData> converterAuthDTOToEntity;

  private final PasswordEncoder passwordEncoder;

  @Override
  public void populateDatabase() {
    PermissionDTO permissionDTO = new PermissionDTO();
    permissionDTO.setAdmin(PermissionConstants.ADMIN_PERMISSIONS);
    AuthenticationDataDTO sampleAdmin = new AuthenticationDataDTO(
            1L,
            "admin",
            passwordEncoder.encode("password"),
            Role.ADMIN,
            "img-url",
            "2023.05.9",
            true,
            true,
            true,
            true,
            permissionDTO);
    authenticationRepository.save(converterAuthDTOToEntity.convert(sampleAdmin));
  }
}

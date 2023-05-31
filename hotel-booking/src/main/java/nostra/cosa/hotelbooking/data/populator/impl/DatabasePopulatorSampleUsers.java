package nostra.cosa.hotelbooking.data.populator.impl;


import java.util.ArrayList;
import java.util.List;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.constants.PermissionConstants;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.auth.dto.PermissionDTO;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;
import nostra.cosa.hotelbooking.data.entity.ApplicationUser;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import nostra.cosa.hotelbooking.data.populator.DatabasePopulator;
import nostra.cosa.hotelbooking.data.repository.ApplicationUserRepository;
import nostra.cosa.hotelbooking.data.repository.AuthenticationRepository;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DatabasePopulatorSampleUsers  implements DatabasePopulator {

  private final AuthenticationRepository authenticationRepository;

  private final ApplicationUserRepository applicationUserRepository;

  private final Converter<AuthenticationDataDTO, AuthenticationData> converterAuthDTOToEntity;

  private final PasswordEncoder passwordEncoder;

  @Override
  public void populateDatabase() {
    PermissionDTO permissionDTO = new PermissionDTO();
    permissionDTO.setAdmin(PermissionConstants.ADMIN_PERMISSIONS);
    List<String> imgPath = new ArrayList<>();
    imgPath.add("tony.PNG");
    AuthenticationDataDTO sampleAdminAuthData = new AuthenticationDataDTO(
            1L,
            "admin",
            passwordEncoder.encode("password"),
            Role.ADMIN,
            imgPath,
            "2023.05.9",
            true,
            true,
            true,
            true,
            permissionDTO,
            "AdminToken");
    authenticationRepository.save(converterAuthDTOToEntity.convert(sampleAdminAuthData));
    ApplicationUser sampleAdminApplicationUser = new ApplicationUser(
            1L,
            sampleAdminAuthData.getId(),
            "",
            "",
            "",
            "");
    applicationUserRepository.save(sampleAdminApplicationUser);
  }
}

package nostra.cosa.hotelbooking.auth.dto;

import lombok.*;
import nostra.cosa.hotelbooking.auth.dto.enums.Role;

/**
 * Authentication service layer representation.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationDataDTO {

  private Long id;

  private String userName;

  private String password;

  private Role role;

  private String imgPath;

  private String registrationDate;

  private Boolean accountNonExpired;

  private Boolean accountNonLocked;

  private Boolean accountCredentialsNonExpired;

  private Boolean accountEnabled;

  private PermissionDTO permissionDTO;
}

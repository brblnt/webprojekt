package nostra.cosa.hotelbooking.auth.dto;

import java.util.List;

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

  private List<String> imgPath;

  private String registrationDate;

  private Boolean accountNonExpired;

  private Boolean accountNonLocked;

  private Boolean accountCredentialsNonExpired;

  private Boolean accountEnabled;

  private PermissionDTO permissionDTO;

  private String token;
}

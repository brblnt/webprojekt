package nostra.cosa.hotelbooking.service.dto;

import lombok.*;

/**
 * Authentication service layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class AuthenticationDataDTO {

  private Long id;

  private String userName;

  private String password;

  private String role;

  private String registrationDate;

  private boolean accountNonExpired;

  private boolean accountNonLocked;

  private boolean accountCredentialsNonExpired;

  private boolean accountEnabled;

}

package nostra.cosa.hotelbooking.service.dto;

import lombok.*;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;

/**
 * ApplicationUser service layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class ApplicationUserDTO {

  private Long id;

  private AuthenticationDataDTO authenticationData;

  private String firstName;

  private String lastName;

  private String emailAddress;

  private String phoneNumber;

}

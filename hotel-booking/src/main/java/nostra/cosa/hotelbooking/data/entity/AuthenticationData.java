package nostra.cosa.hotelbooking.data.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Authentication data layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "authentication_data_table")
public class AuthenticationData {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long authenticationId;

  @Column(name = "user_name", nullable = false)
  private String userName;

  @Column(name = "password", nullable = false)
  private String password;

  @Column(name = "role", nullable = false)
  private String role;

  @Column(name = "registration_date", nullable = false)
  private String registrationDate;

  @Column(name = "account_non_expired", nullable = false)
  private boolean accountNonExpired;

  @Column(name = "account_non_locked", nullable = false)
  private boolean accountNonLocked;

  @Column(name = "account_credentials_non_expired", nullable = false)
  private boolean accountCredentialsNonExpired;

  @Column(name = "account_enabled", nullable = false)
  private boolean accountEnabled;

}

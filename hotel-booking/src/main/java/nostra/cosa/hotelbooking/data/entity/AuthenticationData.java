package nostra.cosa.hotelbooking.data.entity;

import java.util.List;

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

  @Column(name = "user_name", nullable = false, unique = true)
  private String userName;

  @Column(name = "password", nullable = false)
  private String password;

  @Column(name = "role", nullable = false)
  private String role;

  @Column(name = "img_path", nullable = false)
  @ElementCollection
  private List<String> imgPath;

  @Column(name = "registration_date", nullable = false)
  private String registrationDate;

  @Column(name = "account_non_expired", nullable = false)
  private Boolean accountNonExpired;

  @Column(name = "account_non_locked", nullable = false)
  private Boolean accountNonLocked;

  @Column(name = "account_credentials_non_expired", nullable = false)
  private Boolean accountCredentialsNonExpired;

  @Column(name = "account_enabled", nullable = false)
  private Boolean accountEnabled;

}

package nostra.cosa.hotelbooking.data.entity;

import jakarta.persistence.*;
import lombok.*;

/**
 * Application User data layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "users_table")
public class ApplicationUser{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "authentication_id", nullable = false)
  private Long authenticationId;

  @Column(name = "first_name", nullable = false)
  private String firstName;

  @Column(name = "last_name", nullable = false)
  private String lastName;

  @Column(name = "email_address", nullable = false)
  private String emailAddress;

  @Column(name = "phone_number", nullable = false)
  private String phoneNumber;


}

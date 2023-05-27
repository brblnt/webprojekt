package nostra.cosa.hotelbooking.data.entity.address;

import jakarta.persistence.*;
import lombok.*;

/**
 * Address data layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "address_table")
public class Address {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long addressId;

  @Column(name = "country", nullable = false)
  private String country;

  @Column(name = "postal_code", nullable = false)
  private String postalCode;

  @Column(name = "addressName", nullable = false)
  private String addressName;

  @Column(name = "other", nullable = false)
  private String other;

}

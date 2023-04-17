package nostra.cosa.hotelbooking.data.entity.address;

import jakarta.persistence.*;
import lombok.*;

/**
 * Address data layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Entity
@Data
@Table(name = "address_table")
public class Address {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long addressId;

  @Column(name = "country", nullable = false)
  private String country;

  @Column(name = "postal_code", nullable = false)
  private String postalCode;

  @Column(name = "address", nullable = false)
  private String address;

  @Column(name = "other", nullable = false)
  private String other;

}

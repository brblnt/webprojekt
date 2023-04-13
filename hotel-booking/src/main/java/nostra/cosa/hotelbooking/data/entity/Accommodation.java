package nostra.cosa.hotelbooking.data.entity;

import java.util.Set;

import jakarta.persistence.*;
import lombok.*;
import nostra.cosa.hotelbooking.data.entity.enums.AccommodationType;
import nostra.cosa.hotelbooking.data.entity.enums.ServiceType;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Entity
@Data
@Table(name = "accommodation_table")
public class Accommodation extends AuthenticationData{

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name = "address_id", nullable = false)
  private Long addressId;

  @Column(name = "email_address", nullable = false)
  private String emailAddress;

  @Column(name = "phone_number", nullable = false)
  private String phoneNumber;

  @Column(name = "accommodation_type", nullable = false)
  private AccommodationType accommodationType;

  @Column(name = "service_type", nullable = false)
  private ServiceType serviceType;

  @ElementCollection
  private Set<Integer> roomIds;
}

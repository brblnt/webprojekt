package nostra.cosa.hotelbooking.data.entity;

import java.util.List;
import java.util.Set;

import jakarta.persistence.*;
import lombok.*;
import nostra.cosa.hotelbooking.data.entity.enums.AccommodationType;
import nostra.cosa.hotelbooking.data.entity.enums.ServiceType;

/**
 * Accommodation data layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "accommodation_table")
public class Accommodation{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "authentication_id", nullable = false)
  private Long authenticationId;

  @Column(name = "accommodation_name", nullable = false)
  private String accommodationName;

  @Column(name = "address_id", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long addressId;

  @Column(name = "email_address", nullable = false)
  private String emailAddress;

  @Column(name = "phone_number", nullable = false)
  private String phoneNumber;

  @Column(name = "accommodation_type", nullable = false)
  private AccommodationType accommodationType;

  @Column(name = "service_types", nullable = false)
  private List<ServiceType> serviceTypes;

  @Column(name = "room_ids", nullable = false)
  private Set<Integer> roomIds;

}

package nostra.cosa.hotelbooking.service.dto.address;

import lombok.*;

/**
 * Address service layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class AddressDTO {

  private Long addressId;

  private String country;

  private CityDTO city;

  private String address;

  private String other;

  //AddressId-t generálja magától a Accommodationban

  //Address -> addressName az Address.java
}

package nostra.cosa.hotelbooking.service.dto.address;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString

public class AddressDTO {

  private Long id;

  private String country;

  private CityDTO city;

  private String address;

  private String other;

}

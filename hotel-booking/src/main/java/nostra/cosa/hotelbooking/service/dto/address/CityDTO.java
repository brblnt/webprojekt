package nostra.cosa.hotelbooking.service.dto.address;

import lombok.*;
import nostra.cosa.hotelbooking.data.entity.address.City;

/**
 * City service layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class CityDTO {

  private String postalCode;

  private String cityName;

}

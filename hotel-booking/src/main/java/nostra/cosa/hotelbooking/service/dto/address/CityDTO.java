package nostra.cosa.hotelbooking.service.dto.address;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class CityDTO {

  private Long id;

  private String postalCode;

  private String cityName;

}

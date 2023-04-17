package nostra.cosa.hotelbooking.data.entity.address;

import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Entity
@Data
@Table(name = "city_table")
public class City {

  @Id
  @Column(name = "postal_code", nullable = false, unique = true)
  private String postalCode;

  @Column(name = "city_name", nullable = false)
  private String cityName;

}

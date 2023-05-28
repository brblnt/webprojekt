package nostra.cosa.hotelbooking.service.dto;

import jakarta.persistence.Column;
import lombok.*;
import nostra.cosa.hotelbooking.data.entity.enums.RoomType;

/**
 * Room service layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class RoomDTO {

  private Long id;

  private RoomType roomType;

  private Integer numberOfRooms;

  private Integer numberOfSingleBeds;

  private Integer numberOfDoubleBeds;

  private Boolean hasOwnKitchen;

  private Boolean hasOwnBathroom;

  private Boolean active;

  private Double priceOfADay;

  private String roomDetail;

}

package nostra.cosa.hotelbooking.service.dto;

import lombok.*;
import nostra.cosa.hotelbooking.data.entity.enums.RoomType;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class RoomDTO {

  private Long id;

  private RoomType roomType;

  private int numberOfRooms;

  private int numberOfSingleBeds;

  private int numberOfDoubleBeds;

  private boolean hasOwnKitchen;

  private boolean hasOwnBathroom;

  private String other;

}

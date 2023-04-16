package nostra.cosa.hotelbooking.service.dto;

import lombok.*;
import nostra.cosa.hotelbooking.data.entity.enums.ServiceType;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class BookingDTO {

  private Long id;

  private ApplicationUserDTO user;

  private AccommodationDTO accommodation;

  private RoomDTO room;

  private String dateStart;

  private String dateFinish;

  private ServiceType serviceType;

  private boolean archived;

  private boolean resigned;

  private boolean payed;

  private String other;

}

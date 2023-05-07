package nostra.cosa.hotelbooking.service.dto;

import lombok.*;
import nostra.cosa.hotelbooking.data.entity.enums.ServiceType;

/**
 * Booking service layer representation.
 */
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

  private Boolean archived;

  private Boolean resigned;

  private Boolean payed;

  private String other;

}

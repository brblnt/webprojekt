package nostra.cosa.hotelbooking.data.entity;

import jakarta.persistence.*;
import lombok.*;
import nostra.cosa.hotelbooking.data.entity.enums.RoomType;

/**
 * Room data layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "room_table")
public class Room {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "room_type", nullable = false)
  private RoomType roomType;

  @Column(name = "number_of_rooms", nullable = false)
  private Integer numberOfRooms;

  @Column(name = "number_of_single_beds", nullable = false)
  private Integer numberOfSingleBeds;

  @Column(name = "number_of_double_beds", nullable = false)
  private Integer numberOfDoubleBeds;

  @Column(name = "has_own_kitchen", nullable = false)
  private Boolean hasOwnKitchen;

  @Column(name = "has_own_bathroom", nullable = false)
  private Boolean hasOwnBathroom;

  @Column(name = "active", nullable = false)
  private Boolean active;

  @Column(name = "price_of_a_day", nullable = false)
  private Double priceOfADay;

  @Column(name = "room_detail", nullable = false)
  private String roomDetail;
}

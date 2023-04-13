package nostra.cosa.hotelbooking.data.entity;

import jakarta.persistence.*;
import lombok.*;
import nostra.cosa.hotelbooking.data.entity.enums.RoomType;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Entity
@Data
@Table(name = "room_table")
public class Room {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name = "room_type", nullable = false)
  private RoomType roomType;

  @Column(name = "number_of_rooms", nullable = false)
  private int numberOfRooms;

  @Column(name = "number_of_single_beds", nullable = false)
  private int numberOfSingleBeds;

  @Column(name = "number_of_double_beds", nullable = false)
  private int numberOfDoubleBeds;

  @Column(name = "has_own_kitchen", nullable = false)
  private boolean hasOwnKitchen;

  @Column(name = "has_own_bathroom", nullable = false)
  private boolean hasOwnBathroom;

  @Column(name = "other", nullable = false)
  private String other;
}

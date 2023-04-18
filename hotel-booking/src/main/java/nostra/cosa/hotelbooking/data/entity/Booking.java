package nostra.cosa.hotelbooking.data.entity;

import jakarta.persistence.*;
import lombok.*;
import nostra.cosa.hotelbooking.data.entity.enums.ServiceType;

/**
 * Booking data layer representation.
 */
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "bookings_table")
public class Booking {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "user_id", nullable = false)
  private Long userId;

  @Column(name = "accommodation_id", nullable = false)
  private Long accommodationId;

  @Column(name = "room_id", nullable = false)
  private Long roomId;

  @Column(name = "start_date", nullable = false)
  private String startDate;

  @Column(name = "finish_date", nullable = false)
  private String finishDate;

  @Column(name = "service_type", nullable = false)
  private ServiceType serviceType;

  @Column(name = "archived", nullable = false)
  private boolean archived;

  @Column(name = "resigned", nullable = false)
  private boolean resigned;

  @Column(name = "payed", nullable = false)
  private boolean payed;

  @Column(name = "other", nullable = false)
  private String other;
}

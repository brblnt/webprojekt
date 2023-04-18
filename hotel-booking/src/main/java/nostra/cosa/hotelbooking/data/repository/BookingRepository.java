package nostra.cosa.hotelbooking.data.repository;

import nostra.cosa.hotelbooking.data.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Booking related database operations.
 */
public interface BookingRepository  extends JpaRepository<Booking, Long> {
}

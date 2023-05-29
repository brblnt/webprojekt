package nostra.cosa.hotelbooking.data.repository;

import java.util.List;

import nostra.cosa.hotelbooking.data.entity.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Accommodation related database operations.
 */
public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {

  List<Accommodation> findAllByAuthenticationId(Long authenticationId);
}

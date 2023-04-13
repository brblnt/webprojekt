package nostra.cosa.hotelbooking.data.repository;

import nostra.cosa.hotelbooking.data.entity.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {
}

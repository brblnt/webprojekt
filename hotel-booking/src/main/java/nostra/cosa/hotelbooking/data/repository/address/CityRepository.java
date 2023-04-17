package nostra.cosa.hotelbooking.data.repository.address;

import nostra.cosa.hotelbooking.data.entity.address.City;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * City related database operations.
 */
public interface CityRepository extends JpaRepository<City, Long> {
}

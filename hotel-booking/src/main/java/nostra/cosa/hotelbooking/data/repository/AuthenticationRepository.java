package nostra.cosa.hotelbooking.data.repository;

import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthenticationRepository extends JpaRepository<AuthenticationData, Long> {
}

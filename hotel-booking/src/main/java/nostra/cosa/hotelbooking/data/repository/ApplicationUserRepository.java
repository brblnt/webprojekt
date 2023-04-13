package nostra.cosa.hotelbooking.data.repository;

import nostra.cosa.hotelbooking.data.entity.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long> {
}

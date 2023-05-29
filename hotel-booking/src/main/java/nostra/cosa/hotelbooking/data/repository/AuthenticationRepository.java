package nostra.cosa.hotelbooking.data.repository;

import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Authentication related database operations.
 */
public interface AuthenticationRepository extends JpaRepository<AuthenticationData, Long> {


  AuthenticationData findByUserName(String userName);

  AuthenticationData findByToken(String token);

}

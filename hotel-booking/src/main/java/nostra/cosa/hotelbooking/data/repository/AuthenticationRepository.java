package nostra.cosa.hotelbooking.data.repository;

import jakarta.persistence.Column;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * Authentication related database operations.
 */
public interface AuthenticationRepository extends JpaRepository<AuthenticationData, Long> {


  //TODO: ez igy mukodhet-e?
  @Query("SELECT new AuthenticationData(d.authenticationId, d.userName, d.password, d.role," +
          "d.imgPath, d.registrationDate, d.accountNonExpired " +
          "d.accountNonLocked, d.accountCredentialsNonExpired, d.accountEnabled)" +
          " FROM AuthenticationData ad WHERE ad.userName = ?1")
  AuthenticationData getByUserName(String userName);

}

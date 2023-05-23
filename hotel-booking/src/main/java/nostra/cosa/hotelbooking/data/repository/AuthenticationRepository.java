package nostra.cosa.hotelbooking.data.repository;

import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Authentication related database operations.
 */
public interface AuthenticationRepository extends JpaRepository<AuthenticationData, Long> {


  //TODO: ez igy mukodhet-e?

  // new AuthenticationData(d.authenticationId, d.userName, d.password, d.role, d.imgPath, d.registrationDate, d.accountNonExpired d.accountNonLocked, d.accountCredentialsNonExpired, d.accountEnabled)"
  @Query("SELECT ad FROM AuthenticationData ad WHERE ad.userName = :userName")
  AuthenticationData getByUserName(@Param("userName") String userName);

}

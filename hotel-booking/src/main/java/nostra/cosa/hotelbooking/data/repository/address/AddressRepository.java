package nostra.cosa.hotelbooking.data.repository.address;

import nostra.cosa.hotelbooking.data.entity.address.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}

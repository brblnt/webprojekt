package nostra.cosa.hotelbooking.data.repository;

import nostra.cosa.hotelbooking.data.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}

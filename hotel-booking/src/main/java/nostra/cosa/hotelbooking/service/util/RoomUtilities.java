package nostra.cosa.hotelbooking.service.util;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.Room;
import nostra.cosa.hotelbooking.data.repository.RoomRepository;
import nostra.cosa.hotelbooking.service.converter.ConvertRoomEntityToDTO;
import nostra.cosa.hotelbooking.service.dto.RoomDTO;
import org.springframework.stereotype.Service;

/**
 * Room Utilities.
 */
@Service
@RequiredArgsConstructor
public class RoomUtilities {

  private final RoomRepository repository;
  private final ConvertRoomEntityToDTO convertRoomEntityToDTO;

  public Set<RoomDTO> getRoomDTOsByIdList(Set<Integer> roomIDs) {
    Set<RoomDTO> roomDTOList = new HashSet<>();
    List<Room> roomList = repository.findAll();
    for (Integer i : roomIDs) {
      for (Room actualRoom : roomList) {
        if (actualRoom.getId() == (long) i) {
          roomDTOList.add(convertRoomEntityToDTO.convert(actualRoom));
        }
      }
    }
    return roomDTOList;
  }

}

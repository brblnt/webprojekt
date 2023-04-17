package nostra.cosa.hotelbooking.service.util;

import java.util.ArrayList;
import java.util.List;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.Room;
import nostra.cosa.hotelbooking.data.repository.RoomRepository;
import nostra.cosa.hotelbooking.service.converter.ConvertRoomToRoomDTO;
import nostra.cosa.hotelbooking.service.dto.RoomDTO;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomUtilities {

  private final RoomRepository repository;
  private final ConvertRoomToRoomDTO convertRoomToRoomDTO;

  public List<RoomDTO> getRoomDTOsByIdList(List<Integer> roomIDs) {
    List<RoomDTO> roomDTOList = new ArrayList<>();
    List<Room> roomList = repository.findAll();
    for (Integer i : roomIDs) {
      for (Room actualRoom : roomList) {
        if (actualRoom.getId() == (long) i) {
          roomDTOList.add(convertRoomToRoomDTO.convert(actualRoom));
        }
      }
    }
    return roomDTOList;
  }

}

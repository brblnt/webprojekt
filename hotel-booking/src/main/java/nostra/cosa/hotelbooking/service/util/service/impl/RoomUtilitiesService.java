package nostra.cosa.hotelbooking.service.util.service.impl;

import static nostra.cosa.hotelbooking.service.util.Utilities.checkNull;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.service.dto.RoomDTO;
import nostra.cosa.hotelbooking.service.util.service.UtilitiesForService;
import org.springframework.stereotype.Service;

/**
 * Room Utilities for service class.
 */
@Service
@RequiredArgsConstructor
public class RoomUtilitiesService implements UtilitiesForService<RoomDTO> {
  @Override
  public RoomDTO update(RoomDTO oldDTO, RoomDTO newDTO) {
    return new RoomDTO(
            oldDTO.getId(),
            checkNull(oldDTO.getRoomType(), newDTO.getRoomType()),
            checkNull(oldDTO.getRoomNumber(), newDTO.getRoomNumber()),
            checkNull(oldDTO.getNumberOfRooms(), newDTO.getNumberOfRooms()),
            checkNull(oldDTO.getNumberOfSingleBeds(), newDTO.getNumberOfSingleBeds()),
            checkNull(oldDTO.getNumberOfDoubleBeds(), newDTO.getNumberOfDoubleBeds()),
            checkNull(oldDTO.getHasOwnKitchen(), newDTO.getHasOwnKitchen()),
            checkNull(oldDTO.getHasOwnBathroom(), newDTO.getHasOwnBathroom()),
            checkNull(oldDTO.getActive(), newDTO.getActive()),
            checkNull(oldDTO.getPriceOfADay(), newDTO.getPriceOfADay()),
            checkNull(oldDTO.getRoomDetail(), newDTO.getRoomDetail())
    );
  }
}

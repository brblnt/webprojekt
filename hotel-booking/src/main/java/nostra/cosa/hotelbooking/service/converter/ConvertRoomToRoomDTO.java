package nostra.cosa.hotelbooking.service.converter;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.Room;
import nostra.cosa.hotelbooking.service.dto.RoomDTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConvertRoomToRoomDTO {

  private final ModelMapper modelMapper;

  public RoomDTO convert(Room source) {
    return modelMapper.map(source, RoomDTO.class);
  }

}

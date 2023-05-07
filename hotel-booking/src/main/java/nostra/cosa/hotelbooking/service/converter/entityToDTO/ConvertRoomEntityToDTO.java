package nostra.cosa.hotelbooking.service.converter.entityToDTO;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.Room;
import nostra.cosa.hotelbooking.service.dto.RoomDTO;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert Room to RoomDTO via ModelMapper.
 */
@Component
@RequiredArgsConstructor
public class ConvertRoomEntityToDTO implements Converter<Room, RoomDTO> {

  private final ModelMapper modelMapper;

  @Override
  public RoomDTO convert(Room source) {
    return modelMapper.map(source, RoomDTO.class);
  }

}

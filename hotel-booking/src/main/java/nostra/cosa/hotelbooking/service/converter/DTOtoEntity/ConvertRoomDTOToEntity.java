package nostra.cosa.hotelbooking.service.converter.DTOtoEntity;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.Room;
import nostra.cosa.hotelbooking.service.dto.RoomDTO;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert RoomDTO to Room via ModelMapper.
 */
@Component
@RequiredArgsConstructor
public class ConvertRoomDTOToEntity implements Converter<RoomDTO, Room> {

  private final ModelMapper modelMapper;

  @Override
  public Room convert(RoomDTO source) {
    return modelMapper.map(source, Room.class);
  }

}

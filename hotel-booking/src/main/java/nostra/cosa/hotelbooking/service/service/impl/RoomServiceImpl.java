package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;
import java.util.Set;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.data.entity.Room;
import nostra.cosa.hotelbooking.data.repository.RoomRepository;
import nostra.cosa.hotelbooking.service.dto.RoomDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;


/**
 * Room Service class, implements ServiceInterface with RoomDTOs.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class RoomServiceImpl implements BookingService<RoomDTO> {


  private final RoomRepository roomRepository;
  private final Converter<RoomDTO, Room> convertRoomDTOToEntity;
  private final Converter<Room, RoomDTO> convertRoomEntityToDTO;

  @Override
  public List<RoomDTO> getAll() {
    log.info("Get all RoomDTOs.");
    return roomRepository.findAll().stream()
            .map(convertRoomEntityToDTO::convert)
            .toList();
  }

  @Override
  public RoomDTO getById(Long id) throws NotFoundException {
    log.info("Get RoomDTO by id : {}", id);
    return roomRepository.findById(id)
            .map(convertRoomEntityToDTO::convert)
            .orElseThrow(() -> new NotFoundException("There is no RoomDTO with ID:" + id));
  }

  @Override
  public RoomDTO update(RoomDTO update) throws NotFoundException {
    return null;//TODO
  }

  @Override
  public RoomDTO create(RoomDTO create) {
    return null;//TODO
  }

  public Set<RoomDTO> create(Set<RoomDTO> creates) {
    return null;//TODO
  }

  @Override
  public Boolean delete(Long id) {
    try {
      roomRepository.deleteById(id);
      return true;
    } catch (IllegalArgumentException e) {
      log.warn("Data integrity violation [DELETE]");
      return false;
    }
  }
}

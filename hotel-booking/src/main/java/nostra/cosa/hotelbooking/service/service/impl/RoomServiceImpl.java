package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.dto.RoomDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import org.springframework.stereotype.Service;


/**
 * Room Service class, implements ServiceInterface with RoomDTOs.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class RoomServiceImpl implements BookingService<RoomDTO> {

  /**
   * No implementation needed.
   */
  @Override
  public List<RoomDTO> getAll() {
    return null;
  }

  @Override
  public RoomDTO getById(Long id) throws NotFoundException {
    return null;
  }

  @Override
  public RoomDTO update(RoomDTO update) throws NotFoundException {
    return null;
  }

  @Override
  public RoomDTO create(RoomDTO create) {
    return null;
  }

  @Override
  public Boolean delete(Long id) {
    return null;
  }
}

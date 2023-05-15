package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.service.dto.address.AddressDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import org.springframework.stereotype.Service;

/**
 * Address Service class, implements ServiceInterface with AddressDTO.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AddressServiceImpl implements BookingService<AddressDTO> {

  /**
   * No implementation need.
   */
  @Override
  public List<AddressDTO> getAll() {
    return null;
  }

  @Override
  public AddressDTO getById(Long id) throws NotFoundException {
    return null;//TODO
  }

  @Override
  public AddressDTO update(AddressDTO update) throws NotFoundException {
    return null;//TODO
  }

  @Override
  public AddressDTO create(AddressDTO create) {
    return null;//TODO
  }

  /**
   * No implementation needed.
   */
  @Override
  public Boolean delete(Long id) {
    return null;
  }
}

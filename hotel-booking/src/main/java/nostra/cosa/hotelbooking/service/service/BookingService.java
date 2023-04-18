package nostra.cosa.hotelbooking.service.service;

import java.util.List;

import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;

/**
 * Service interface with generic parameter.
 *
 * TODO: interface name?.
 */
public interface BookingService<DTO> {

  List<DTO> getAll();

  DTO getById(Long id) throws NotFoundException;

  DTO update(DTO update);

  DTO create(DTO create);

  boolean delete(Long id);
}

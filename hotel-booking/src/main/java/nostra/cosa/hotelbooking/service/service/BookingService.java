package nostra.cosa.hotelbooking.service.service;

import java.util.List;

import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;

/**
 * Service interface with generic parameter.
 *
 */
public interface BookingService<DTO> {

  List<DTO> getAll();

  DTO getById(Long id) throws NotFoundException;

  DTO update(DTO update) throws NotFoundException;

  DTO create(DTO create);

  Boolean delete(Long id);
}

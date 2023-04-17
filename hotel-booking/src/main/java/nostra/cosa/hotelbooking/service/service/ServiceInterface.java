package nostra.cosa.hotelbooking.service.service;

import java.util.List;

/**
 * Service interface with generic parameter.
 */
public interface ServiceInterface<DTO> {

  List<DTO> getAll();

  DTO getById(Long id);

  DTO update(DTO update);

  DTO create(DTO create);

  void delete(Long id);
}

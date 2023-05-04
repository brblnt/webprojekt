package nostra.cosa.hotelbooking.service.util.service;

public interface UtilitiesForService <T>{

  T update(T oldDTO, T newDTO);
}

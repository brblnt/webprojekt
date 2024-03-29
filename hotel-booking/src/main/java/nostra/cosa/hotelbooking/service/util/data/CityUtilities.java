package nostra.cosa.hotelbooking.service.util.data;

import java.util.List;
import java.util.Objects;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.address.City;
import nostra.cosa.hotelbooking.data.repository.address.CityRepository;
import nostra.cosa.hotelbooking.service.dto.address.CityDTO;
import org.springframework.stereotype.Service;

/**
 * City Utilities.
 */
@Service
@RequiredArgsConstructor
public class CityUtilities {

  private final CityRepository cityRepository;


  public CityDTO getActualCity(String postalCode) {
    try {
      List<City> cityList = cityRepository.findAll().stream().toList();
      for (City actual: cityList) {
        if (Objects.equals(actual.getPostalCode(), postalCode)) {
          return new CityDTO(actual.getPostalCode(), actual.getCityName());
        }
      }
    } catch (Exception e) {
      return createEmptyCity();
    }
    return createEmptyCity();
  }

  public CityDTO createEmptyCity() {
    return new CityDTO("", "");
  }


  public CityDTO saveCity(CityDTO cityDTO) {
    City city = cityRepository.save(new City(cityDTO.getPostalCode(), cityDTO.getCityName()));
    return new CityDTO(city.getPostalCode(), city.getCityName());
  }
}

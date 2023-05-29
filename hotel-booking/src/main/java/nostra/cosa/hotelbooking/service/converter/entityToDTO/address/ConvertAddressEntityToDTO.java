package nostra.cosa.hotelbooking.service.converter.entityToDTO.address;


import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.address.Address;
import nostra.cosa.hotelbooking.service.dto.address.AddressDTO;
import nostra.cosa.hotelbooking.service.util.data.CityUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert Address to AddressDTO.
 */
@Component
@RequiredArgsConstructor
public class ConvertAddressEntityToDTO implements Converter<Address, AddressDTO> {

  private final CityUtilities cityUtilities;

  @Override
  public AddressDTO convert(Address source) {
    return new AddressDTO(
            source.getAddressId(),
            source.getCountry(),
            cityUtilities.getActualCity(source.getPostalCode()),
            source.getAddressName(),
            source.getAddressDetail()
    );
  }


}

package nostra.cosa.hotelbooking.service.converter;


import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.address.Address;
import nostra.cosa.hotelbooking.service.dto.address.AddressDTO;
import nostra.cosa.hotelbooking.service.util.CityUtilities;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConvertAddressToAddressDTO implements Converter<Address, AddressDTO> {

  private final CityUtilities cityUtilities;


 @Override
  public AddressDTO convert(Address source) {
    return new AddressDTO(
            source.getAddressId(),
            source.getCountry(),
            cityUtilities.getActualCity(source.getPostalCode()),
            source.getAddress(),
            source.getOther()
    );
  }


}

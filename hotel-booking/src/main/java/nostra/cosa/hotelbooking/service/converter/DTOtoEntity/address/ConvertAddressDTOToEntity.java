package nostra.cosa.hotelbooking.service.converter.DTOtoEntity.address;

import nostra.cosa.hotelbooking.data.entity.address.Address;
import nostra.cosa.hotelbooking.service.dto.address.AddressDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert AddressDTO to Address.
 */
@Component
public class ConvertAddressDTOToEntity implements Converter<AddressDTO, Address> {


  @Override
  public Address convert(AddressDTO source) {
    return new Address(
            source.getAddressId(),
            source.getCountry(),
            source.getCity().getPostalCode(),
            source.getAddressName(),
            source.getAddressDetail()
    );
  }


}

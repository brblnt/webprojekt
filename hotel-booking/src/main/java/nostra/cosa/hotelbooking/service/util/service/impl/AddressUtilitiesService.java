package nostra.cosa.hotelbooking.service.util.service.impl;

import static nostra.cosa.hotelbooking.service.util.Utilities.checkNull;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.service.dto.address.AddressDTO;
import nostra.cosa.hotelbooking.service.util.service.UtilitiesForService;
import org.springframework.stereotype.Service;

/**
 * Address Utilities for service class.
 */
@Service
@RequiredArgsConstructor
public class AddressUtilitiesService implements UtilitiesForService<AddressDTO> {

  @Override
  public AddressDTO update(AddressDTO oldDTO, AddressDTO newDTO) {
    return new AddressDTO(
            oldDTO.getAddressId(),
            checkNull(oldDTO.getCountry(), newDTO.getCountry()),
            checkNull(oldDTO.getCity(), newDTO.getCity()),
            checkNull(oldDTO.getAddressName(), newDTO.getAddressName()),
            checkNull(oldDTO.getAddressDetail(), newDTO.getAddressDetail())
    );
  }

}

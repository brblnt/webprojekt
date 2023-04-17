package nostra.cosa.hotelbooking.service.util;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.repository.address.AddressRepository;
import nostra.cosa.hotelbooking.service.converter.ConvertAddressToAddressDTO;
import nostra.cosa.hotelbooking.service.dto.address.AddressDTO;
import org.springframework.stereotype.Service;

/**
 * Address Utilities.
 */
@Service
@RequiredArgsConstructor
public class AddressUtilities {

  private final AddressRepository addressRepository;
  private final ConvertAddressToAddressDTO convertAddressToAddressDTO;
  private final CityUtilities cityUtilities;

  public AddressDTO getAddressById(Long id) {
    try {
      return convertAddressToAddressDTO.convert(addressRepository.findById(id).get());
    } catch (Exception e) {
      return createEmptyAddress();
    }
  }

  private AddressDTO createEmptyAddress() {
    return new AddressDTO(
            0L, "", cityUtilities.createEmptyCity(), "", "");
  }

}

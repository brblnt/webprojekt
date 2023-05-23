package nostra.cosa.hotelbooking.service.util.data;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.service.dto.address.AddressDTO;
import org.springframework.stereotype.Service;

/**
 * Address Utilities.
 */
@Service
@RequiredArgsConstructor
public class AddressUtilities {
  private final CityUtilities cityUtilities;

  public AddressDTO createEmptyAddress() {
    return new AddressDTO(
            0L, "", cityUtilities.createEmptyCity(), "", "");
  }

}

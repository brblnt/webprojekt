package nostra.cosa.hotelbooking.service.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.data.entity.address.Address;
import nostra.cosa.hotelbooking.data.repository.address.AddressRepository;
import nostra.cosa.hotelbooking.service.dto.address.AddressDTO;
import nostra.cosa.hotelbooking.service.exceptions.NotFoundException;
import nostra.cosa.hotelbooking.service.service.BookingService;
import nostra.cosa.hotelbooking.service.util.data.AddressUtilities;
import nostra.cosa.hotelbooking.service.util.data.CityUtilities;
import nostra.cosa.hotelbooking.service.util.service.impl.AddressUtilitiesService;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Service;

/**
 * Address Service class, implements ServiceInterface with AddressDTO.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AddressServiceImpl implements BookingService<AddressDTO> {

  private final AddressUtilitiesService addressUtilitiesService;
  private final AddressUtilities addressUtilities;
  private final CityUtilities cityUtilities;
  private final AddressRepository addressRepository;
  private final Converter<AddressDTO, Address> convertAddressDTOToEntity;
  private final Converter<Address, AddressDTO> convertAddressEntityToDTO;

  @Override
  public List<AddressDTO> getAll() {
    log.info("Get all AddressDTOs.");
    return addressRepository.findAll().stream()
            .map(convertAddressEntityToDTO::convert)
            .toList();
  }

  @Override
  public AddressDTO getById(Long id) {
    log.info("Get AddressDTO by id : {}", id);
    return addressRepository.findById(id)
            .map(convertAddressEntityToDTO::convert)
            .orElse(addressUtilities.createEmptyAddress());
  }

  @Override
  public AddressDTO update(AddressDTO update) throws NotFoundException {
    return create(
            addressUtilitiesService.update(
                    getById(update.getAddressId()),
                    update));
  }

  @Override
  public AddressDTO create(AddressDTO create) {
    cityUtilities.saveCity(create.getCity());
    return convertAddressEntityToDTO.convert(
            addressRepository.save(convertAddressDTOToEntity.convert(create)));
  }


  @Override
  public Boolean delete(Long id) {
    try {
      addressRepository.deleteById(id);
      return true;
    } catch (IllegalArgumentException e) {
      log.warn("Data integrity violation [DELETE]");
      return false;
    }
  }
}

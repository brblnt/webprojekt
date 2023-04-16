package nostra.cosa.hotelbooking.service.dto;

import java.util.List;
import java.util.Set;

import lombok.*;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import nostra.cosa.hotelbooking.data.entity.enums.AccommodationType;
import nostra.cosa.hotelbooking.data.entity.enums.ServiceType;
import nostra.cosa.hotelbooking.service.dto.address.AddressDTO;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class AccommodationDTO {

  private Long id;

  private AuthenticationDataDTO authenticationData;

  private AddressDTO address;

  private String emailAddress;

  private String phoneNumber;

  private AccommodationType accommodationType;

  private List<ServiceType> serviceTypes;

  private Set<RoomDTO> rooms;
}

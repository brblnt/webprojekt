package nostra.cosa.hotelbooking.service.converter;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import nostra.cosa.hotelbooking.service.dto.AuthenticationDataDTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConvertAuthenticationDataToAuthenticationDataDTO {

  private final ModelMapper modelMapper;

  public AuthenticationDataDTO convert(AuthenticationData source) {
    return modelMapper.map(source, AuthenticationDataDTO.class);
  }

}

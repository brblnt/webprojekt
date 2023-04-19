package nostra.cosa.hotelbooking.service.converter;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

/**
 * Convert AuthenticationData to AuthenticationDataDTO via ModelMapper.
 */
@Component
@RequiredArgsConstructor
public class ConvertAuthenticationDataEntityToDTO {

  private final ModelMapper modelMapper;

  public AuthenticationDataDTO convert(AuthenticationData source) {
    return modelMapper.map(source, AuthenticationDataDTO.class);
  }

}

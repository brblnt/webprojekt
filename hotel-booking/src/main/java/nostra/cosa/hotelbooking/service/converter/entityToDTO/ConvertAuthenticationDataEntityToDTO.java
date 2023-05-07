package nostra.cosa.hotelbooking.service.converter.entityToDTO;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert AuthenticationData to AuthenticationDataDTO via ModelMapper.
 */
@Component
@RequiredArgsConstructor
public class ConvertAuthenticationDataEntityToDTO implements Converter<AuthenticationData, AuthenticationDataDTO> {

  private final ModelMapper modelMapper;

  @Override
  public AuthenticationDataDTO convert(AuthenticationData source) {
    return modelMapper.map(source, AuthenticationDataDTO.class);
  }

}

package nostra.cosa.hotelbooking.service.converter.DTOtoEntity;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nostra.cosa.hotelbooking.auth.dto.AuthenticationDataDTO;
import nostra.cosa.hotelbooking.data.entity.AuthenticationData;
import org.modelmapper.ModelMapper;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * Convert AuthenticationDataDTO to AuthenticationData via ModelMapper.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class ConvertAuthenticationDTOToEntity implements Converter<AuthenticationDataDTO, AuthenticationData> {

  private final ModelMapper modelMapper;

  @Override
  public AuthenticationData convert(AuthenticationDataDTO source) {
    return modelMapper.map(source, AuthenticationData.class);
  }
}

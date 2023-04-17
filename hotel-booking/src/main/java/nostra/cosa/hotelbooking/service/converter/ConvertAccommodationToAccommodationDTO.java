package nostra.cosa.hotelbooking.service.converter;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.data.entity.Accommodation;
import nostra.cosa.hotelbooking.service.dto.AccommodationDTO;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConvertAccommodationToAccommodationDTO implements Converter<Accommodation, AccommodationDTO> {


  @Override
  public AccommodationDTO convert(Accommodation source) {
    return new AccommodationDTO(


    );
  }
}

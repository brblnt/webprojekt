package nostra.cosa.hotelbooking.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Mapper configuration.
 */
@Configuration
public class MapperConfiguration {

  /**
   * Create model mapper bean.
   *
   * @return new ModelMapper.
   */
  @Bean
  public ModelMapper modelMapper() {
    return new ModelMapper();
  }

}

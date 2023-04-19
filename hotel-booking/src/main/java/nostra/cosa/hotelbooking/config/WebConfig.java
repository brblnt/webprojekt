package nostra.cosa.hotelbooking.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuration for Cors mapping.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${auth.origin.url}")
    private String authOriginUrl;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/User/login").allowedOrigins(authOriginUrl).allowCredentials(true);
        registry.addMapping("/User/register").allowedOrigins(authOriginUrl).allowCredentials(true);
    }
}

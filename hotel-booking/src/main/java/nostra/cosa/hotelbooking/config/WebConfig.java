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

    @Value("${authentication.origin.url}")
    private String originUrl;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/user/login").allowedOrigins(originUrl).allowCredentials(true);
        registry.addMapping("/user/register").allowedOrigins(originUrl).allowCredentials(true);
    }
}

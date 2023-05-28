package nostra.cosa.hotelbooking.config;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.service.HotelBookingAuthenticationProvider;
import nostra.cosa.hotelbooking.auth.service.HotelBookingAuthorizationService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

/**
 * Configuration for application security.
 */
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class ApplicationSecurityConfig {

    private static final String[] URL_WHITELIST = {"/user/login", "/user/register", "hotel-booking/room", "hotel-booking/accommodation"};

    private static final String[] ALLOWED_METHODS = {"GET", "POST", "DELETE", "PUT", "PATCH"};

    @Value("${authentication.origin.url}")
    private String authOriginUrl;

    private final HotelBookingAuthenticationProvider authProvider;

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests()
                .requestMatchers(URL_WHITELIST).authenticated()
                .anyRequest().permitAll()  //TODO
                .and().csrf().disable()
                .headers().frameOptions().disable()
                .and()
                .cors().configurationSource(request -> setCorsConfiguration())
                .and().authenticationProvider(authProvider);
        return http.build();
    }

    private CorsConfiguration setCorsConfiguration() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
        configuration.setAllowedOrigins(List.of(authOriginUrl));
        configuration.setAllowedMethods(List.of(ALLOWED_METHODS));
        configuration.setAllowCredentials(true);
        configuration.setExposedHeaders(List.of("Authorization"));
        return configuration;
    }

    @Bean
    static MethodSecurityExpressionHandler methodSecurityExpressionHandler() {
        DefaultMethodSecurityExpressionHandler expressionHandler = new DefaultMethodSecurityExpressionHandler();
        expressionHandler.setPermissionEvaluator(new HotelBookingAuthorizationService());
        return expressionHandler;
    }

}

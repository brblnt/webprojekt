package nostra.cosa.hotelbooking.config;

import nostra.cosa.hotelbooking.auth.service.CustomAuthenticationProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfig {

    private static final String[] AUTH_WHITELIST = {"/user/login", "/user/register"};

    @Value("${auth.origin.url}")
    private String authOriginUrl;

    @Autowired
    private CustomAuthenticationProvider authProvider;


    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests()
                .requestMatchers(AUTH_WHITELIST).permitAll()
                .anyRequest().authenticated()
                .and().csrf().disable()
                .rememberMe()
                .and().cors().configurationSource(request -> setCorsConfiguration())
                .and().authenticationProvider(authProvider);
        return http.build();
    }

    private CorsConfiguration setCorsConfiguration() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList(authOriginUrl));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "DELETE", "PUT", "PATCH"));
        configuration.setAllowCredentials(true);
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));
        configuration.setExposedHeaders(Arrays.asList("Authorization"));
        return configuration;
    }

}

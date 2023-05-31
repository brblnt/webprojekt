package nostra.cosa.hotelbooking.config;

import lombok.RequiredArgsConstructor;
import nostra.cosa.hotelbooking.auth.filter.TokenHeaderFilter;
import nostra.cosa.hotelbooking.auth.service.HotelBookingAuthenticationService;
import nostra.cosa.hotelbooking.auth.service.HotelBookingAuthorizationService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.expression.method.DefaultMethodSecurityExpressionHandler;
import org.springframework.security.access.expression.method.MethodSecurityExpressionHandler;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.ExceptionTranslationFilter;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;

/**
 * Configuration for application security.
 */
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class ApplicationSecurityConfig {

    private static final String[] URL_WHITELIST = {"/user/login", "/user/register", "hotel-booking/room", "hotel-booking/accommodation"};

    @Value("${authentication.token.name}")
    private String tokenName;

    private final HotelBookingAuthenticationService authService;

    @Bean
    static MethodSecurityExpressionHandler methodSecurityExpressionHandler() {
        DefaultMethodSecurityExpressionHandler expressionHandler = new DefaultMethodSecurityExpressionHandler();
        expressionHandler.setPermissionEvaluator(new HotelBookingAuthorizationService());
        return expressionHandler;
    }

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        final TokenHeaderFilter filter = filter();
        http
                .headers().frameOptions().disable()
                .and()
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(filter)
                .addFilterBefore(new ExceptionTranslationFilter(new Http403ForbiddenEntryPoint()), filter.getClass())
                .authorizeHttpRequests()
                .requestMatchers(URL_WHITELIST).permitAll()
                .anyRequest().permitAll();
        return http.build();
    }

    private TokenHeaderFilter filter() {
        final TokenHeaderFilter filter = new TokenHeaderFilter(tokenName);
        filter.setAuthenticationManager(newAuthentication -> {
            final UserDetails userDetails = authService.getAuthorizationDTOByToken(newAuthentication.getName());
            if (userDetails != null) {
                return UsernamePasswordAuthenticationToken.authenticated(userDetails.getUsername(), userDetails.getPassword(), userDetails.getAuthorities());
            }
            return newAuthentication;
        });
        return filter;
    }

}

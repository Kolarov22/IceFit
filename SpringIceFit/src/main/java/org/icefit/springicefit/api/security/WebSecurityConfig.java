package org.icefit.springicefit.api.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class WebSecurityConfig {

    private JWTRequestFilter jwtRequestFilter;

    public WebSecurityConfig(JWTRequestFilter jwtRequestFilter) {
        this.jwtRequestFilter = jwtRequestFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable().cors().disable();
        http.addFilterBefore(jwtRequestFilter, AuthorizationFilter.class); // ADD THE REQUEST FILTER BEFORE THE AUTH
        http.authorizeHttpRequests()
                .requestMatchers("/","/auth/v1/register","/auth/v1/login","/auth/v2/registerClient","/auth/v2/registerInstructor"
                        ,"/auth/v2/login","/auth/v2/registerAdmin").permitAll()
                .requestMatchers("/auth/v2/status").hasAnyAuthority("ROLE_ADMIN")
                .requestMatchers("/auth/v2/plan").hasAnyAuthority("ROLE_INSTRUCTOR")
                .anyRequest().authenticated();
        return http.build();
    }
}

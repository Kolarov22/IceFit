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
        http.csrf().disable().cors(withDefaults());
        http.addFilterBefore(jwtRequestFilter, AuthorizationFilter.class); // ADD THE REQUEST FILTER BEFORE THE AUTH
        http.authorizeHttpRequests()
                .requestMatchers("/","/auth/v1/register","/auth/v1/login","/auth/v2/registerClient","/auth/v2/registerInstructor","/auth/v2/login","v1/support/","v1/support/create","v1/training/plans").permitAll()
                .requestMatchers("v1/update/","v1/update/instructor","/v1/training/create").hasAnyRole("INSTRUCTOR")
                .requestMatchers("v1/update/","v1/update/client","v1/training/","v1/training/add/**","v1/training/add/","v1/training/client/training-plan").hasAnyRole("CLIENT")
                .requestMatchers("/auth/v2/status").hasAnyRole("ADMIN")
                .requestMatchers("/auth/v2/plan").hasAnyRole("INSTRUCTOR")
                .anyRequest().authenticated();
        return http.build();
    }
}

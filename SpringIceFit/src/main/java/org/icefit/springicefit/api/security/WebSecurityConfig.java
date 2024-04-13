package org.icefit.springicefit.api.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class WebSecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .authorizeHttpRequests((authorizeRequests) ->
                        authorizeRequests
                                .requestMatchers(HttpMethod.GET,"/admin")
                                .hasAnyRole("ADMIN")
                                .requestMatchers("/","/auth/v1/register","/auth/v1/login","/auth/v2/register","/auth/v2/login").permitAll())
                .formLogin(withDefaults()).httpBasic().and().csrf().disable();
        return http.build();
    }

}

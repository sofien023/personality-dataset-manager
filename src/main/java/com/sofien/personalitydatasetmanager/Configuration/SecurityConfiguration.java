package com.sofien.personalitydatasetmanager.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
class SecurityConfiguration {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable).authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.GET, "/api/personality/get").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/personality/import").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/api/personality/modify-record/{id}").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/api/personality/delete-record/{id}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/personality/add-record").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/personality/get-record/{id}").permitAll()
                        .anyRequest().authenticated()
                ).httpBasic(Customizer.withDefaults());

        return http.build();
    }
}

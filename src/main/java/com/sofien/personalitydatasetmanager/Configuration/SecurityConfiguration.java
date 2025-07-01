package com.sofien.personalitydatasetmanager.Configuration;

import com.sofien.personalitydatasetmanager.Middleware.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    public final static int STRENGTH = 10;

    @Autowired
    private final UserDetailsService userDetailsService;

    @Autowired
    private final JwtRequestFilter jwtRequestFilter;

    public SecurityConfiguration(UserDetailsService userDetailsService,  JwtRequestFilter jwtRequestFilter) {
        this.userDetailsService = userDetailsService;
        this.jwtRequestFilter = jwtRequestFilter;
    }

//    @Bean
//    public AuthenticationManager authenticationManager(
//            AuthenticationConfiguration configuration) throws Exception {
//        return configuration.getAuthenticationManager();
//    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable).authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.POST, "/api/personality/get").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/api/personality/import").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/api/personality/modify-record/{id}").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/api/personality/delete-record/{id}").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/api/personality/get/{id}").hasRole("ADMIN")

                        .requestMatchers(HttpMethod.POST, "/api/personality/get/user/{id}").hasRole("USER")
                        .requestMatchers(HttpMethod.POST, "/api/personality/add-record").hasRole("USER")


                        .requestMatchers("/api/auth/**").permitAll()
                        .anyRequest().authenticated()
                ).addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(STRENGTH);
    }
}

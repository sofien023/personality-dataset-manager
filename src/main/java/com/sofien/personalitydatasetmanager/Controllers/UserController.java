package com.sofien.personalitydatasetmanager.Controllers;

import com.sofien.personalitydatasetmanager.Middleware.JWTUtil;
import com.sofien.personalitydatasetmanager.Middleware.JwtRequestFilter;
import com.sofien.personalitydatasetmanager.Models.DTO.UserDTO;
import com.sofien.personalitydatasetmanager.Models.User;
import com.sofien.personalitydatasetmanager.Repositories.UserRepository;
import com.sofien.personalitydatasetmanager.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

//    @Autowired
//    private AuthenticationManager authenticationManager;

    private final UserService userService;

    @Autowired
    private JWTUtil jwtUtil;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins="*")
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            // background checks
            user.setRole("USER");
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            return new ResponseEntity<>("Registered user: " + user.getUsername() + " successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error while registering user: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins="*")
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserDTO user) {
        try {
            //TODO: add jwt authentification
            Optional<User> OptionalUser = Optional.ofNullable(
                    userRepository.findByEmail(user.getEmail())
                            .orElseThrow(() -> new UsernameNotFoundException("User not found"))
            );
            User foundUser = OptionalUser.get();

            if (!passwordEncoder.matches(user.getPassword(), foundUser.getPassword())) {
                return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
            }

            userService.loadUserByUsername(foundUser.getUsername());
//            Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(
//                            user.getUsername(),
//                            user.getPassword()
//                    )
//            );

            //SecurityContextHolder.getContext().setAuthentication(authentication);
            String token = jwtUtil.generateToken(foundUser.getUsername());
            return new ResponseEntity<>(token, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error while login user: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins="*")
    @PostMapping("/retrieve/{token}")
    public ResponseEntity<?> retrieveCredentials(@PathVariable String token) {
        try {
            System.out.println(token);
            if (jwtUtil.isTokenExpired(token)) {
                return new ResponseEntity<>("Token is expired", HttpStatus.UNAUTHORIZED);
            }

            String username = jwtUtil.extractUsername(token);
            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            HashMap<String, String> credentials = new HashMap<>();
            credentials.put("username", user.getUsername());
            credentials.put("email", user.getEmail());
            credentials.put("role", user.getRole());

            return new ResponseEntity<>(credentials, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error retrieving credentials: " + e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

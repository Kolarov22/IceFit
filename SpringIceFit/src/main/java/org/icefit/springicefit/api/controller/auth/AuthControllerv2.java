package org.icefit.springicefit.api.controller.auth;

import jakarta.validation.Valid;
import org.icefit.springicefit.api.model.*;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.model.User;
import org.icefit.springicefit.service.TrainingService;
import org.icefit.springicefit.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/auth/v2")
@CrossOrigin
public class AuthControllerv2 {

    /* IN AUTHCONTROLLERV2 WE TEST THE ENDPOINTS WITH POSTMAN -- JSON */
    private UserService userService;
    private TrainingService trainingService;

    public AuthControllerv2(UserService userService, TrainingService trainingService) {
        this.userService = userService;
        this.trainingService = trainingService;
    }

    @PostMapping("/registerClient")
    public ResponseEntity<Map<String, String>> registerClient(
            @Valid @RequestBody RegistrationBodyClient registrationBody) {
        try {
            userService.registerUser(registrationBody);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Registration successful");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
    }

    @PostMapping("/registerInstructor")
    public ResponseEntity<Map<String, String>> registerInstructor(
            @Valid @RequestBody RegistrationBodyInstructor registrationBody) {
        try {
            userService.registerInstructor(registrationBody);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Registration successful");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginUser(@Valid @RequestBody LoginBody loginBody) {
        String jwt = userService.loginUser(loginBody);
        if (jwt == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        } else {
            LoginResponse response = new LoginResponse();
            response.setJwt(jwt);
            return ResponseEntity.ok(response);
        }
    }

    @GetMapping("/status")
    public User getLoggedInUserProfile(@AuthenticationPrincipal User user) {
        return user;
    }

}

package org.icefit.springicefit.api.controller.auth;

import jakarta.validation.Valid;
import org.icefit.springicefit.api.model.LoginBody;
import org.icefit.springicefit.api.model.LoginResponse;
import org.icefit.springicefit.api.model.RegistrationBody;
import org.icefit.springicefit.model.User;
import org.icefit.springicefit.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/auth/v1")
public class AuthController {

    private UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/register")
    public String registerPage(Model model) {
        model.addAttribute("registrationBody", new RegistrationBody());
        return "register";
    }

    @GetMapping("/login")
    public String loginPage(Model model) {
        model.addAttribute("loginBody", new LoginBody());
        return "login";
    }
    //@RequestBody - will give a json, if using postman its ok but i created basic html with thymeleaf to check in browser
    @PostMapping("/register")
    public ResponseEntity registerUser(@Valid @ModelAttribute RegistrationBody registrationBody) {
        try {
            userService.registerUser(registrationBody);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}

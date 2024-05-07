package org.icefit.springicefit.api.controller.auth;

import jakarta.validation.Valid;
import org.icefit.springicefit.api.model.LoginBody;
import org.icefit.springicefit.api.model.LoginResponse;
import org.icefit.springicefit.api.model.RegistrationBodyClient;
import org.icefit.springicefit.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/auth/v1")
public class AuthControllerv1 {


    /*IN AUTHCONTROLLERV1 WE HAVE THE THYMELEAF IMPLENETANTION FOR ENDPOINTS*/
    private UserService userService;

    public AuthControllerv1(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/register")
    public String registerPage(Model model) {
        model.addAttribute("registrationBody", new RegistrationBodyClient());
        return "register";
    }

    @GetMapping("/login")
    public String loginPage(Model model) {
        model.addAttribute("loginBody", new LoginBody());
        return "login";
    }
    //@RequestBody - all the data will be pass to the server through a full JSON body
    //@ModelAttribute - will take a query string, so all the data is passed to the server through the url // used for binding data from request param
    @PostMapping("/register")
    public ResponseEntity registerUser(@Valid @ModelAttribute RegistrationBodyClient registrationBody) {
        try {
            userService.registerUser(registrationBody);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginUser(@Valid @ModelAttribute LoginBody loginBody){
        String jwt = userService.loginUser(loginBody);
        if (jwt == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }else{
            LoginResponse response = new LoginResponse();
            response.setJwt(jwt);
            return ResponseEntity.ok(response);
        }
    }
}

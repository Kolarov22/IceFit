package org.icefit.springicefit.api.controller.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BasicController {
    @GetMapping("/index")
    public String homePage(){
        return "index";
    }

    @GetMapping("/admin")
    public String adminPage(){
        return "admin";
    }
}

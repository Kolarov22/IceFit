package org.icefit.springicefit;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestControll {

    @GetMapping("/test")
    public String test(){
        return "test";
    }
}

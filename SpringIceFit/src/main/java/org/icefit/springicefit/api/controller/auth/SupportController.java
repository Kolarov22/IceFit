package org.icefit.springicefit.api.controller.auth;


import jakarta.validation.Valid;
import org.icefit.springicefit.api.model.SupportBody;
import org.icefit.springicefit.api.model.TrainingPlanBody;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.service.SupportService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("v1/support/")
public class SupportController {

    private SupportService supportService;

    public SupportController(SupportService supportService) {
        this.supportService = supportService;
    }

    @PostMapping("/create")
    public ResponseEntity createTrainingPlan(@Valid @RequestBody SupportBody supportBody) {
        //TODO - ADD CLIENT/INSTRUCTOR FOR RELATION TO SUPPORT MESSAGE){
        try {
            supportService.createServiceBody(supportBody);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}


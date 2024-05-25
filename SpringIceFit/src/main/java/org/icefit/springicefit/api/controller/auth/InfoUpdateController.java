package org.icefit.springicefit.api.controller.auth;

import jakarta.validation.Valid;
import org.icefit.springicefit.api.model.UpdateClientBody;
import org.icefit.springicefit.api.model.UpdateInstructorBody;
import org.icefit.springicefit.model.Client;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.service.UpdateService;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/update/")
@CrossOrigin
public class InfoUpdateController {


    private UpdateService updateService;

    public InfoUpdateController(UpdateService updateService) {
        this.updateService = updateService;
    }


    @PostMapping("/client")
    public ResponseEntity<?> updateClient(@Valid @RequestBody UpdateClientBody updateClientBody, @AuthenticationPrincipal Client client) {
        try {
            updateService.updateClientInfo(client, updateClientBody);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PostMapping("/instructor")
    public ResponseEntity<?> updateInstructor(@Valid @RequestBody UpdateInstructorBody updateInstructorBody, @AuthenticationPrincipal Instructor instructor) {
        try {
            updateService.updateInstructorInfo(instructor, updateInstructorBody);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}

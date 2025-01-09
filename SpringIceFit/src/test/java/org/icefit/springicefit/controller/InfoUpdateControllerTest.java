package org.icefit.springicefit.controller;

import org.icefit.springicefit.api.controller.auth.InfoUpdateController;
import org.icefit.springicefit.api.model.UpdateClientBody;
import org.icefit.springicefit.api.model.UpdateInstructorBody;
import org.icefit.springicefit.model.Client;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.service.UpdateService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class InfoUpdateControllerTest {

    @Mock
    private UpdateService updateService;

    private InfoUpdateController infoUpdateController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        infoUpdateController = new InfoUpdateController(updateService);
    }

    @Test
    void updateClient_Success() {
        UpdateClientBody updateClientBody = new UpdateClientBody();
        updateClientBody.setFirstName("John");
        updateClientBody.setLastName("Doe");
        updateClientBody.setPhoneNumber("1234567890");

        Client client = new Client();

        doNothing().when(updateService).updateClientInfo(any(Client.class), any(UpdateClientBody.class));

        ResponseEntity<?> response = infoUpdateController.updateClient(updateClientBody, client);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(updateService, times(1)).updateClientInfo(any(Client.class), any(UpdateClientBody.class));
    }

    @Test
    void updateInstructor_Success() {
        UpdateInstructorBody updateInstructorBody = new UpdateInstructorBody();
        updateInstructorBody.setFirstName("Jane");
        updateInstructorBody.setLastName("Doe");
        updateInstructorBody.setSpeciality("Strength Training");

        Instructor instructor = new Instructor();

        doNothing().when(updateService).updateInstructorInfo(any(Instructor.class), any(UpdateInstructorBody.class));

        ResponseEntity<?> response = infoUpdateController.updateInstructor(updateInstructorBody, instructor);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(updateService, times(1)).updateInstructorInfo(any(Instructor.class), any(UpdateInstructorBody.class));
    }

    @Test
    void updateClient_Failure() {
        UpdateClientBody updateClientBody = new UpdateClientBody();
        Client client = new Client();

        doThrow(new RuntimeException()).when(updateService).updateClientInfo(any(Client.class),
                any(UpdateClientBody.class));

        ResponseEntity<?> response = infoUpdateController.updateClient(updateClientBody, client);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        verify(updateService, times(1)).updateClientInfo(any(Client.class), any(UpdateClientBody.class));
    }

    @Test
    void updateInstructor_Failure() {
        UpdateInstructorBody updateInstructorBody = new UpdateInstructorBody();
        Instructor instructor = new Instructor();

        doThrow(new RuntimeException()).when(updateService).updateInstructorInfo(any(Instructor.class),
                any(UpdateInstructorBody.class));

        ResponseEntity<?> response = infoUpdateController.updateInstructor(updateInstructorBody, instructor);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        verify(updateService, times(1)).updateInstructorInfo(any(Instructor.class), any(UpdateInstructorBody.class));
    }
}
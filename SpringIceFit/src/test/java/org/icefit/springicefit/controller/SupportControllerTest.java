package org.icefit.springicefit.controller;

import org.icefit.springicefit.api.controller.auth.SupportController;
import org.icefit.springicefit.api.model.SupportBody;
import org.icefit.springicefit.service.SupportService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class SupportControllerTest {

    @Mock
    private SupportService supportService;

    private SupportController supportController;

    @BeforeEach
    void setUp() throws Exception {
        MockitoAnnotations.openMocks(this);
        supportController = new SupportController(supportService);
    }

    @Test
    void createSupportMessage_Success() throws Exception {
        SupportBody supportBody = new SupportBody();
        supportBody.setName("Test User");
        supportBody.setEmail("test@test.com");
        supportBody.setMessage("Test message");

        doNothing().when(supportService).createServiceBody(any(SupportBody.class));

        ResponseEntity<?> response = supportController.createTrainingPlan(supportBody);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(supportService, times(1)).createServiceBody(any(SupportBody.class));
    }

    @Test
    void createSupportMessage_Failure() throws Exception {
        SupportBody supportBody = new SupportBody();
        supportBody.setName("Test User");
        supportBody.setEmail("test@test.com");
        supportBody.setMessage("Test message");

        doThrow(new RuntimeException()).when(supportService).createServiceBody(any(SupportBody.class));

        ResponseEntity<?> response = supportController.createTrainingPlan(supportBody);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        verify(supportService, times(1)).createServiceBody(any(SupportBody.class));
    }
}
package org.icefit.springicefit.controller;

import org.icefit.springicefit.api.controller.auth.AuthControllerv2;
import org.icefit.springicefit.api.model.LoginBody;
import org.icefit.springicefit.api.model.RegistrationBodyClient;
import org.icefit.springicefit.model.User;
import org.icefit.springicefit.service.TrainingService;
import org.icefit.springicefit.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class AuthControllerv2Test {

    @Mock
    private UserService userService;

    @Mock
    private TrainingService trainingService;

    private AuthControllerv2 authController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        authController = new AuthControllerv2(userService, trainingService);
    }

    @Test
    void registerClient_Success() throws Exception {
        RegistrationBodyClient registrationBody = new RegistrationBodyClient();
        registrationBody.setUsername("testuser");
        registrationBody.setEmail("test@test.com");
        registrationBody.setPassword("password123");

        doNothing().when(userService).registerUser(any(RegistrationBodyClient.class));

        ResponseEntity response = authController.registerClient(registrationBody);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(userService, times(1)).registerUser(any(RegistrationBodyClient.class));
    }

    @Test
    void registerClient_Failure() throws Exception {
        RegistrationBodyClient registrationBody = new RegistrationBodyClient();
        registrationBody.setUsername("testuser");
        registrationBody.setEmail("test@test.com");
        registrationBody.setPassword("password123");

        doThrow(new RuntimeException()).when(userService).registerUser(any(RegistrationBodyClient.class));

        ResponseEntity response = authController.registerClient(registrationBody);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        verify(userService, times(1)).registerUser(any(RegistrationBodyClient.class));
    }

    @Test
    void loginUser_Success() {
        LoginBody loginBody = new LoginBody();
        loginBody.setUsername("testuser");
        loginBody.setPassword("password123");
        String expectedJwt = "test.jwt.token";

        when(userService.loginUser(any(LoginBody.class))).thenReturn(expectedJwt);

        ResponseEntity<?> response = authController.loginUser(loginBody);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(userService, times(1)).loginUser(any(LoginBody.class));
    }

    @Test
    void loginUser_Failure() {
        LoginBody loginBody = new LoginBody();
        loginBody.setUsername("testuser");
        loginBody.setPassword("wrongpassword");

        when(userService.loginUser(any(LoginBody.class))).thenReturn(null);

        ResponseEntity<?> response = authController.loginUser(loginBody);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        verify(userService, times(1)).loginUser(any(LoginBody.class));
    }

    @Test
    void getLoggedInUserProfile_Success() {
        User mockUser = new User();
        mockUser.setUsername("testuser");
        mockUser.setEmail("test@test.com");

        User result = authController.getLoggedInUserProfile(mockUser);

        assertNotNull(result);
        assertEquals("testuser", result.getUsername());
        assertEquals("test@test.com", result.getEmail());
    }
}
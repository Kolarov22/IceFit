package org.icefit.springicefit.services;

import org.icefit.springicefit.api.model.LoginBody;
import org.icefit.springicefit.api.model.RegistrationBodyClient;
import org.icefit.springicefit.api.model.RegistrationBodyInstructor;
import org.icefit.springicefit.dao.UserDao;
import org.icefit.springicefit.model.Client;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.model.User;
import org.icefit.springicefit.service.EncryptionService;
import org.icefit.springicefit.service.JWTService;
import org.icefit.springicefit.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


public class UserServiceTest {
    @Mock
    private UserDao userDao;

    @Mock
    private EncryptionService encryptionService;

    @Mock
    private JWTService jwtService;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void registerClient() throws Exception {
        RegistrationBodyClient registrationBody = new RegistrationBodyClient();
        registrationBody.setEmail("test@example.com");
        registrationBody.setUsername("testuser");
        registrationBody.setPassword("password");

        when(userDao.findByUsernameIgnoreCase("testuser")).thenReturn(Optional.empty());
        when(userDao.findByEmailIgnoreCase("test@example.com")).thenReturn(Optional.empty());
        when(encryptionService.encryptPassword("password")).thenReturn("encryptedPassword");

        Client savedClient = new Client();
        savedClient.setUsername("testuser");
        savedClient.setEmail("test@example.com");

        when(userDao.save(any(Client.class))).thenReturn(savedClient);

        User result = userService.registerUser(registrationBody);

        assertNotNull(result);
        assertEquals("testuser", result.getUsername());
        verify(userDao, times(1)).save(any(Client.class));
    }

    @Test
    void registerInstructor() throws Exception {
        RegistrationBodyInstructor registrationBody = new RegistrationBodyInstructor();
        registrationBody.setEmail("test@example.com");
        registrationBody.setUsername("testuser");
        registrationBody.setPassword("password");

        when(userDao.findByUsernameIgnoreCase("testuser")).thenReturn(Optional.empty());
        when(userDao.findByEmailIgnoreCase("test@example.com")).thenReturn(Optional.empty());
        when(encryptionService.encryptPassword("password")).thenReturn("encryptedPassword");

        Instructor savedInstructor = new Instructor();
        savedInstructor.setUsername("testuser");
        savedInstructor.setEmail("test@example.com");

        when(userDao.save(any(Instructor.class))).thenReturn(savedInstructor);

        User result = userService.registerInstructor(registrationBody);

        assertNotNull(result);
        assertEquals("testuser", result.getUsername());
        verify(userDao, times(1)).save(any(Instructor.class));
    }

    @Test
    void loginUser() {
        LoginBody loginBody = new LoginBody();
        loginBody.setUsername("testuser");
        loginBody.setPassword("password");

        User user = new User();
        user.setUsername("testuser");
        user.setPassword("encryptedPassword");

        when(userDao.findByUsernameIgnoreCase("testuser")).thenReturn(Optional.of(user));
        when(encryptionService.verifyPassword("password", "encryptedPassword")).thenReturn(true);
        when(jwtService.generateJWT(user)).thenReturn("jwtToken");

        String jwt = userService.loginUser(loginBody);

        assertEquals("jwtToken", jwt);
    }
}

package org.icefit.springicefit.service;

import org.icefit.springicefit.api.model.LoginBody;
import org.icefit.springicefit.api.model.RegistrationBodyClient;
import org.icefit.springicefit.dao.UserDao;
import org.icefit.springicefit.model.Client;
import org.icefit.springicefit.model.User;
import org.icefit.springicefit.service.jwt.JWTService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Mock
    private UserDao userDao;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JWTService jwtService;

    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        userService = new UserService(userDao, passwordEncoder, jwtService, null);
    }

    @Test
    void registerUser_Success() {
        RegistrationBodyClient registrationBody = new RegistrationBodyClient();
        registrationBody.setUsername("testuser");
        registrationBody.setEmail("test@test.com");
        registrationBody.setPassword("password123");

        when(userDao.findByEmailIgnoreCase(anyString())).thenReturn(Optional.empty());
        when(userDao.findByUsernameIgnoreCase(anyString())).thenReturn(Optional.empty());
        when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");

        assertDoesNotThrow(() -> userService.registerUser(registrationBody));
        verify(userDao, times(1)).save(any(Client.class));
    }

    @Test
    void loginUser_Success() {
        LoginBody loginBody = new LoginBody();
        loginBody.setUsername("testuser");
        loginBody.setPassword("password123");

        User mockUser = new User();
        mockUser.setUsername("testuser");
        mockUser.setPassword("encodedPassword");

        when(userDao.findByUsernameIgnoreCase(anyString())).thenReturn(Optional.of(mockUser));
        when(passwordEncoder.matches(anyString(), anyString())).thenReturn(true);
        when(jwtService.generateJWT(any(User.class))).thenReturn("test.jwt.token");

        String jwt = userService.loginUser(loginBody);
        System.out.println("Generated JWT: " + jwt);

        assertNotNull(jwt);
        assertEquals("test.jwt.token", jwt);
    }

    @Test
    void loginUser_WrongPassword() {
        LoginBody loginBody = new LoginBody();
        loginBody.setUsername("testuser");
        loginBody.setPassword("wrongpassword");

        User mockUser = new User();
        mockUser.setUsername("testuser");
        mockUser.setPassword("encodedPassword");

        when(userDao.findByUsernameIgnoreCase(anyString())).thenReturn(Optional.of(mockUser));
        when(passwordEncoder.matches(anyString(), anyString())).thenReturn(false);

        String jwt = userService.loginUser(loginBody);

        assertNull(jwt);
    }
}
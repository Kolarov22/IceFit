package org.icefit.springicefit.bootstrap;

import org.icefit.springicefit.api.model.RegistrationBodyClient;
import org.icefit.springicefit.api.model.RegistrationBodyInstructor;
import org.icefit.springicefit.dao.SupportDao;
import org.icefit.springicefit.dao.TrainingPlanDao;
import org.icefit.springicefit.dao.UserDao;
import org.icefit.springicefit.model.Client;
import org.icefit.springicefit.model.Support;
import org.icefit.springicefit.service.TrainingService;
import org.icefit.springicefit.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class dataLoader implements CommandLineRunner {


    private UserDao userDao;
    private TrainingPlanDao trainingPlanDao;
    private SupportDao supportDao;

    private TrainingService trainingService;

    private UserService userService;


    public dataLoader(UserDao userDao, TrainingPlanDao trainingPlanDao, SupportDao supportDao, TrainingService trainingService, UserService userService) {
        this.userDao = userDao;
        this.trainingPlanDao = trainingPlanDao;
        this.supportDao = supportDao;
        this.trainingService = trainingService;
        this.userService = userService;
    }


    @Override
    public void run(String... args) throws Exception{

        PasswordEncoder bcrypt = new BCryptPasswordEncoder();

        createClient("client1","client1@example.com","password1");
        createClient("client2","client2@example.com","password2");

        createInstructor("instructor1", "instructor1@example.com", "password1");
        createInstructor("instructor2", "instructor2@example.com", "password2");
    }


    private void createClient(String username, String email, String password) {
        try {
            RegistrationBodyClient registrationBody = new RegistrationBodyClient();
            registrationBody.setUsername(username);
            registrationBody.setEmail(email);
            registrationBody.setPassword(password);
            userService.registerUser(registrationBody);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void createInstructor(String username, String email, String password) {
        try {
            RegistrationBodyInstructor registrationBody = new RegistrationBodyInstructor();
            registrationBody.setUsername(username);
            registrationBody.setEmail(email);
            registrationBody.setPassword(password);
            userService.registerInstructor(registrationBody);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

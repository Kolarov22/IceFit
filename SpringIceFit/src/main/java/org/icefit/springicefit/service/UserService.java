package org.icefit.springicefit.service;

import org.icefit.springicefit.api.model.LoginBody;
import org.icefit.springicefit.api.model.RegistrationBodyClient;
import org.icefit.springicefit.api.model.RegistrationBodyInstructor;
import org.icefit.springicefit.dao.UserDao;
import org.icefit.springicefit.model.Client;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.model.Role;
import org.icefit.springicefit.model.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private UserDao userDao;
    private EncryptionService encryptionService;
    private JWTService jwtService;

    public UserService(UserDao userDao, EncryptionService encryptionService, JWTService jwtService) {
        this.userDao = userDao;
        this.encryptionService = encryptionService;
        this.jwtService = jwtService;
    }

    public User registerUser(RegistrationBodyClient registrationBody) throws Exception{
        if(userDao.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent()
                || userDao.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()){
            throw new Exception();
        }
        Client user = new Client();
        user.setEmail(registrationBody.getEmail());
        user.setUsername(registrationBody.getUsername());
        user.setSub(Boolean.FALSE);
        user.setPassword(encryptionService.encryptPassword(registrationBody.getPassword()));

        //WHEN CREATING USER - WE AUTOMATICALLY ASSIGN HIS ROLE AS CLIENT
        user.getRoles().add(Role.ROLE_CLIENT);

        return userDao.save(user);
    }
    public User registerInstructor(RegistrationBodyInstructor registrationBody) throws Exception{
        if(userDao.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent()
                || userDao.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()){
            throw new Exception();
        }

        Instructor instructor = new Instructor();
        instructor.setEmail(registrationBody.getEmail());
        instructor.setUsername(registrationBody.getUsername());
        instructor.setPassword(encryptionService.encryptPassword(registrationBody.getPassword()));

        //WHEN CREATING USER - WE AUTOMATICALLY ASSIGN HIS ROLE AS INSTRUCTOR
        instructor.getRoles().add(Role.ROLE_INSTRUCTOR);

        return userDao.save(instructor);
    }

    public User registerAdmin(RegistrationBodyInstructor registrationBody) throws Exception{
        if(userDao.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent()
                || userDao.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()){
            throw new Exception();
        }
        User admin = new User();
        admin.setEmail(registrationBody.getEmail());
        admin.setUsername(registrationBody.getUsername());

        admin.setPassword(encryptionService.encryptPassword(registrationBody.getPassword()));

        //WHEN CREATING USER - WE AUTOMATICALLY ASSIGN HIS ROLE AS CLIENT
        admin.getRoles().add(Role.ROLE_ADMIN);

        return userDao.save(admin);
    }

    public String loginUser(LoginBody loginBody){
        Optional<User> certUser = userDao.findByUsernameIgnoreCase(loginBody.getUsername());
        if(certUser.isPresent()){
            User user = certUser.get();
            if (encryptionService.verifyPassword(loginBody.getPassword(),user.getPassword())){
//                System.out.println("an user has logged in");
                return jwtService.generateJWT(user);
            }
        }
        return null;
    }
}

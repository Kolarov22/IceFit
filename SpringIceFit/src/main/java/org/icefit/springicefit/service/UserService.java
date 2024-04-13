package org.icefit.springicefit.service;

import org.icefit.springicefit.api.model.LoginBody;
import org.icefit.springicefit.api.model.RegistrationBody;
import org.icefit.springicefit.dao.UserDao;
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

    public User registerUser(RegistrationBody registrationBody) throws Exception{
        if(userDao.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent()
                || userDao.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()){
            throw new Exception();
        }
        User user = new User();
        user.setEmail(registrationBody.getEmail());
        user.setUsername(registrationBody.getUsername());
        user.setFirstName(registrationBody.getFirstName());
        user.setLastName(registrationBody.getLastName());

        user.setPassword(encryptionService.encryptPassword(registrationBody.getPassword()));

        //WHEN CREATING USER - WE AUTOMATICALLY ASSIGN HIS ROLE AS CLIENT
        user.getRoles().add(Role.ROLE_ADMIN);

        return userDao.save(user);
    }


    public String loginUser(LoginBody loginBody){
        Optional<User> certUser = userDao.findByUsernameIgnoreCase(loginBody.getUsername());
        if(certUser.isPresent()){
            User user = certUser.get();
            if (encryptionService.verifyPassword(loginBody.getPassword(),user.getPassword())){
                return jwtService.generateJWT(user);
            }
        }
        return null;
    }
}

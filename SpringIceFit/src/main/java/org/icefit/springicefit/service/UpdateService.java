package org.icefit.springicefit.service;


import org.icefit.springicefit.api.model.UpdateClientBody;
import org.icefit.springicefit.api.model.UpdateInstructorBody;
import org.icefit.springicefit.dao.UserDao;
import org.icefit.springicefit.model.Client;
import org.icefit.springicefit.model.Instructor;
import org.springframework.stereotype.Service;

@Service
public class UpdateService {
    private final UserDao userDao;

    public UpdateService(UserDao userDao) {
        this.userDao = userDao;
    }

    public void updateClientInfo(Client client, UpdateClientBody updateClientBody) {
        client.setFirstName(updateClientBody.getFirstName());
        client.setLastName(updateClientBody.getLastName());
        client.setPhoneNumber(updateClientBody.getPhoneNumber());
        client.setFitnessGoals(updateClientBody.getFitnessGoals());
        client.setNutritionalPreferences(updateClientBody.getNutritionalPreferences());
        client.setAboutMe(updateClientBody.getAboutMe());
        client.setHeight(updateClientBody.getHeight());
        client.setBodyFat(updateClientBody.getBodyFat());
        client.setWeight(updateClientBody.getWeight());
        client.setActivityLevel(updateClientBody.getActivityLevel());
        client.setMedicalHistory(updateClientBody.getMedicalHistory());
        userDao.save(client);
    }

    public void updateInstructorInfo(Instructor instructor, UpdateInstructorBody updateInstructorBody){
        instructor.setFirstName(updateInstructorBody.getFirstName());
        instructor.setLastName(updateInstructorBody.getLastName());
        instructor.setPhoneNumber(updateInstructorBody.getPhoneNumber());
        instructor.setFitnessGoals(updateInstructorBody.getFitnessGoals());
        instructor.setNutritionalPreferences(updateInstructorBody.getNutritionalPreferences());
        instructor.setAboutMe(updateInstructorBody.getAboutMe());
        instructor.setHeight(updateInstructorBody.getHeight());
        instructor.setBodyFat(updateInstructorBody.getBodyFat());
        instructor.setWeight(updateInstructorBody.getWeight());
        instructor.setFitnessGoals(updateInstructorBody.getFitnessGoals());
        instructor.setSpeciality(updateInstructorBody.getSpeciality());
        instructor.setCertifications(updateInstructorBody.getCertifications());

        userDao.save(instructor);
    }

}

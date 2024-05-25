package org.icefit.springicefit.service;


import org.icefit.springicefit.api.model.TrainingPlanBody;
import org.icefit.springicefit.dao.TrainingPlanDao;
import org.icefit.springicefit.dao.UserDao;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.model.TrainingPlan;
import org.icefit.springicefit.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TrainingService {
    private TrainingPlanDao trainingPlanDao;
    private UserDao userDao;

    public TrainingService(TrainingPlanDao trainingPlanDao, UserDao userDao, UserDao userDao1) {
        this.trainingPlanDao = trainingPlanDao;
        this.userDao = userDao1;
    }

    public TrainingPlan createTrainingBody(TrainingPlanBody trainingPlanBody, Instructor instructor) throws Exception {
        if (instructor == null) {
            throw new IllegalArgumentException("Instructor must not be null.");
        }
        TrainingPlan trainingPlan = new TrainingPlan();
        trainingPlan.setName(trainingPlanBody.getName());
        trainingPlan.setDescription(trainingPlanBody.getDescription());
        trainingPlan.setPrice(trainingPlanBody.getPrice());
        trainingPlan.setInstructor(instructor);
        instructor.setTrainingPlan(trainingPlan);
        trainingPlanDao.save(trainingPlan);
        userDao.save(instructor); // Ensure the instructor is saved with the new training plan

        return trainingPlanDao.save(trainingPlan);
    }


    public List<TrainingPlan> getTrainingPlans() {
        return trainingPlanDao.findAll();
    }

}

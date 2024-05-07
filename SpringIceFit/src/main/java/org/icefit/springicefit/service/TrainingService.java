package org.icefit.springicefit.service;


import org.icefit.springicefit.api.model.TrainingPlanBody;
import org.icefit.springicefit.dao.TrainingPlanDao;
import org.icefit.springicefit.dao.UserDao;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.model.TrainingPlan;
import org.springframework.stereotype.Service;

@Service
public class TrainingService {
    private TrainingPlanDao trainingPlanDao;

    public TrainingService(TrainingPlanDao trainingPlanDao, UserDao userDao) {
        this.trainingPlanDao = trainingPlanDao;
    }

    public TrainingPlan addTrainingBody(TrainingPlanBody trainingPlanBody, Instructor instructor) throws Exception {
        if (instructor == null) {
            throw new IllegalArgumentException("Instructor must not be null.");
        }
        TrainingPlan trainingPlan = new TrainingPlan();
        trainingPlan.setName(trainingPlanBody.getName());
        trainingPlan.setDescription(trainingPlanBody.getDescription());
        trainingPlan.setPrice(trainingPlanBody.getPrice());
        trainingPlan.setInstructor(instructor);

        return trainingPlanDao.save(trainingPlan);
    }
}

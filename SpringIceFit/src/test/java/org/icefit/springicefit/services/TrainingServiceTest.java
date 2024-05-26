package org.icefit.springicefit.services;

import org.icefit.springicefit.api.model.TrainingPlanBody;
import org.icefit.springicefit.dao.TrainingPlanDao;
import org.icefit.springicefit.dao.UserDao;
import org.icefit.springicefit.model.Client;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.model.TrainingPlan;
import org.icefit.springicefit.service.TrainingService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
public class TrainingServiceTest {

    @Mock
    private TrainingPlanDao trainingPlanDao;

    @Mock
    private UserDao userDao;

    @InjectMocks
    private TrainingService trainingService;

    @BeforeEach
    void setUp(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void createTrainingBody() throws Exception {
        TrainingPlanBody trainingPlanBody = new TrainingPlanBody();
        trainingPlanBody.setName("Plan Name");
        trainingPlanBody.setDescription("Plan Description");
        trainingPlanBody.setPrice(112.2f);

        Instructor instructor = new Instructor();
        instructor.setId(1);

        TrainingPlan trainingPlan = new TrainingPlan();
        trainingPlan.setId(1L);
        trainingPlan.setName("Plan Name");

        when(trainingPlanDao.save(any(TrainingPlan.class))).thenReturn(trainingPlan);

        TrainingPlan result = trainingService.createTrainingBody(trainingPlanBody, instructor);

        assertNotNull(result);
        assertEquals("Plan Name", result.getName());
        verify(trainingPlanDao, times(2)).save(any(TrainingPlan.class));
        verify(userDao, times(1)).save(any(Instructor.class));
    }

    @Test
    void addTrainingPlanToClient() throws Exception {
        Long planId = 1L;
        Client client = new Client();
        client.setId(1);

        TrainingPlan trainingPlan = new TrainingPlan();
        trainingPlan.setId(planId);

        when(trainingPlanDao.findById(planId)).thenReturn(Optional.of(trainingPlan));

        trainingService.addTrainingPlanToClient(planId, client);

        assertEquals(trainingPlan, client.getTrainingPlan());
        verify(userDao, times(1)).save(client);
    }
}

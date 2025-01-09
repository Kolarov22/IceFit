package org.icefit.springicefit.controller;

import org.icefit.springicefit.api.controller.auth.TrainingPlanControllerv1;
import org.icefit.springicefit.api.model.TrainingPlanBody;
import org.icefit.springicefit.model.Client;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.model.TrainingPlan;
import org.icefit.springicefit.service.TrainingService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class TrainingPlanControllerv1Test {

    @Mock
    private TrainingService trainingService;

    private TrainingPlanControllerv1 trainingPlanController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        trainingPlanController = new TrainingPlanControllerv1(null, trainingService);
    }

    @Test
    void createTrainingPlan_Success() throws Exception {
        TrainingPlanBody trainingPlanBody = new TrainingPlanBody();
        trainingPlanBody.setName("Test Plan");
        trainingPlanBody.setDescription("Test Description");
        trainingPlanBody.setPrice(99.99f);

        Instructor instructor = new Instructor();

        doNothing().when(trainingService).createTrainingBody(any(TrainingPlanBody.class), any(Instructor.class));

        ResponseEntity response = trainingPlanController.createTrainingPlan(trainingPlanBody, instructor);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(trainingService, times(1)).createTrainingBody(any(TrainingPlanBody.class), any(Instructor.class));
    }

    @Test
    void getAllTrainingPlans_Success() {
        List<TrainingPlan> mockPlans = Arrays.asList(
                new TrainingPlan(),
                new TrainingPlan());

        when(trainingService.getTrainingPlans()).thenReturn(mockPlans);

        ResponseEntity<List<TrainingPlan>> response = trainingPlanController.getAllTrainingPlans();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(2, response.getBody().size());
        verify(trainingService, times(1)).getTrainingPlans();
    }

    @Test
    void addTrainingPlanToClient_Success() throws Exception {
        Client client = new Client();
        Long planId = 1L;

        doNothing().when(trainingService).addTrainingPlanToClient(planId, client);

        ResponseEntity<?> response = trainingPlanController.addTrainingPlanToClient(planId, client);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(trainingService, times(1)).addTrainingPlanToClient(planId, client);
    }
}
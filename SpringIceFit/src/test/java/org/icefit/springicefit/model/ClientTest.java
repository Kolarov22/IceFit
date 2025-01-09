package org.icefit.springicefit.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ClientTest {

    private Client client;

    @BeforeEach
    void setUp() {
        client = new Client();
    }

    @Test
    void testClientFields() {
        client.setUsername("testclient");
        client.setEmail("test@test.com");
        client.setPhoneNumber("1234567890");
        client.setHeight(180.0f);
        client.setWeight(75.0f);
        client.setBodyFat(15.0f);
        client.setFitnessGoals("Build muscle");
        client.setNutritionalPreferences("High protein");
        client.setActivityLevel("Intermediate");
        client.setMedicalHistory("None");
        client.setAboutMe("Fitness enthusiast");
        client.setSub(true);

        assertEquals("testclient", client.getUsername());
        assertEquals("test@test.com", client.getEmail());
        assertEquals("1234567890", client.getPhoneNumber());
        assertEquals(180.0f, client.getHeight());
        assertEquals(75.0f, client.getWeight());
        assertEquals(15.0f, client.getBodyFat());
        assertEquals("Build muscle", client.getFitnessGoals());
        assertEquals("High protein", client.getNutritionalPreferences());
        assertEquals("Intermediate", client.getActivityLevel());
        assertEquals("None", client.getMedicalHistory());
        assertEquals("Fitness enthusiast", client.getAboutMe());
        assertTrue(client.getSub());
    }

    @Test
    void testTrainingPlanAssociation() {
        TrainingPlan trainingPlan = new TrainingPlan();
        trainingPlan.setName("Test Plan");
        trainingPlan.setDescription("Test Description");

        client.setTrainingPlan(trainingPlan);

        assertNotNull(client.getTrainingPlan());
        assertEquals("Test Plan", client.getTrainingPlan().getName());
        assertEquals("Test Description", client.getTrainingPlan().getDescription());
    }
}
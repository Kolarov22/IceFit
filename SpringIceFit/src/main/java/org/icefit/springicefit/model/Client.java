package org.icefit.springicefit.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.springframework.data.repository.cdi.Eager;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;


//TODO - CLIENT:
// CLIENT ONE TO ONE WITH INSTRUCTOR ??? TO BE DECIDED OR ONLY WITH TRAINING PLAN AND FROM THERE
// CLIENT HAS ONE TRAINING PLAN -- TO CHANGE - OK
// ADD TRAINING PLAN TO CLIENT - ALSO OK - NEED SERVICE AND A POST_MAPPING
// DONE !!!!

@Entity
@Table(name = "clients")
public class Client extends User{

    @Column(name = "subscription")
    private Boolean sub;

    @Column(name = "phoneNumber")
    private String phoneNumber;

    @Column(name = "fitnessGoals")
    private String fitnessGoals;

    @Column(name = "nutritionalPreferences")
    private String nutritionalPreferences;

    @Column(name = "height")
    private float height;

    @Column(name = "weight")
    private float weight;

    @Column(name = "bodyFatPercentage")
    private float bodyFat;

    @Column(name = "activityLevel")
    private String activityLevel;

    @Column(name = "medicalHistory")
    private String medicalHistory;

    @Column(name = "aboutMe")
    private String aboutMe;

    @ManyToOne
    @JoinColumn(name = "training_plan_id")
    @JsonIgnore
    private TrainingPlan trainingPlan;

    public TrainingPlan getTrainingPlan() {
        return trainingPlan;
    }

    public void setTrainingPlan(TrainingPlan trainingPlan) {
        this.trainingPlan = trainingPlan;
    }

    public String getActivityLevel() {
        return activityLevel;
    }

    public void setActivityLevel(String activityLevel) {
        this.activityLevel = activityLevel;
    }

    public String getAboutMe() {
        return aboutMe;
    }

    public void setAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getFitnessGoals() {
        return fitnessGoals;
    }

    public void setFitnessGoals(String fitnessGoals) {
        this.fitnessGoals = fitnessGoals;
    }

    public String getNutritionalPreferences() {
        return nutritionalPreferences;
    }

    public void setNutritionalPreferences(String nutritionalPreferences) {
        this.nutritionalPreferences = nutritionalPreferences;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public float getBodyFat() {
        return bodyFat;
    }

    public void setBodyFat(float bodyFat) {
        this.bodyFat = bodyFat;
    }

    public String getMedicalHistory() {
        return medicalHistory;
    }

    public void setMedicalHistory(String medicalHistory) {
        this.medicalHistory = medicalHistory;
    }

    public Boolean getSub() {
        return sub;
    }

    public void setSub(Boolean sub) {
        this.sub = sub;
    }

}

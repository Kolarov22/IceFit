package org.icefit.springicefit.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.LinkedHashSet;
import java.util.Set;

//TODO:
// ADD MORE @COLUMNS
//
@Entity
@Table(name = "instructors")
public class Instructor extends User{

    @Column(name = "speciality")
    private String speciality;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "training_plan_id")
    @JsonIgnore
    private TrainingPlan trainingPlan;

    public TrainingPlan getTrainingPlan() {
        return trainingPlan;
    }

    public void setTrainingPlan(TrainingPlan trainingPlan) {
        this.trainingPlan = trainingPlan;
        if (trainingPlan != null && trainingPlan.getInstructor() != this) {
            trainingPlan.setInstructor(this);
        }
    }


    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }
}

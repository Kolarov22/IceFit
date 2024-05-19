package org.icefit.springicefit.model;


import jakarta.persistence.*;

import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "instructors")
public class Instructor extends User{

    @Column(name = "speciality")
    private String speciality;

    @OneToMany(mappedBy = "instructor", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<TrainingPlan> trainingPlans = new LinkedHashSet<>();

    public Set<TrainingPlan> getTrainingPlans() {
        return trainingPlans;
    }

    public void setTrainingPlans(Set<TrainingPlan> trainingPlans) {
        this.trainingPlans = trainingPlans;
    }

    public void addTrainingPlan(TrainingPlan trainingPlan) {
        trainingPlans.add(trainingPlan);
        trainingPlan.setInstructor(this);
    }

    public void removeTrainingPlan(TrainingPlan trainingPlan) {
        trainingPlans.remove(trainingPlan);
        trainingPlan.setInstructor(null);
    }
    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }
}

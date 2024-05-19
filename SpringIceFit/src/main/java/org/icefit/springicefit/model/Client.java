package org.icefit.springicefit.model;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "clients")
public class Client extends User{

    @Column(name = "subscription")
    private Boolean sub;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<TrainingPlan> trainingPlans = new LinkedHashSet<>();

    public Set<TrainingPlan> getTrainingPlans() {
        return trainingPlans;
    }

    public void setTrainingPlans(Set<TrainingPlan> trainingPlans) {
        this.trainingPlans = trainingPlans;
    }


    public Boolean getSub() {
        return sub;
    }

    public void setSub(Boolean sub) {
        this.sub = sub;
    }

}

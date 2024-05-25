package org.icefit.springicefit.model;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;


//TODO - CLIENT:
// CLIENT ONE TO ONE WITH INSTRUCTOR ??? TO BE DECIDED OR ONLY WITH TRAINING PLAN AND FROM THERE
// CLIENT HAS ONE TRAINING PLAN -- TO CHANGE - OK
// ADD TRAINING PLAN TO CLIENT - ALSO OK - NEED SERVICE AND A POST_MAPPING
//

@Entity
@Table(name = "clients")
public class Client extends User{

    @Column(name = "subscription")
    private Boolean sub;

    @ManyToOne
    @JoinColumn(name = "training_plan_id")
    private TrainingPlan trainingPlan;

    public TrainingPlan getTrainingPlan() {
        return trainingPlan;
    }

    public void setTrainingPlan(TrainingPlan trainingPlan) {
        this.trainingPlan = trainingPlan;
    }






    public Boolean getSub() {
        return sub;
    }

    public void setSub(Boolean sub) {
        this.sub = sub;
    }

}

package org.icefit.springicefit.dao;

import org.icefit.springicefit.model.TrainingPlan;
import org.icefit.springicefit.model.User;
import org.springframework.data.repository.CrudRepository;

public interface TrainingPlanDao extends CrudRepository<TrainingPlan,Long> {
}

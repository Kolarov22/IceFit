package org.icefit.springicefit.dao;

import org.icefit.springicefit.model.TrainingPlan;
import org.icefit.springicefit.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TrainingPlanDao extends CrudRepository<TrainingPlan,Long> {
    List<TrainingPlan> findAll();
    Optional<TrainingPlan> findById(int id);

    @Query("SELECT tp FROM TrainingPlan tp JOIN FETCH tp.clients c WHERE c.id = :clientId")
    List<TrainingPlan> findByClientId(@Param("clientId") int clientId);

}

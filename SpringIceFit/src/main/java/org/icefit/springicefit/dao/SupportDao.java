package org.icefit.springicefit.dao;

import org.icefit.springicefit.model.Support;
import org.icefit.springicefit.model.TrainingPlan;
import org.springframework.data.repository.CrudRepository;


public interface SupportDao extends CrudRepository<Support,Long> {
}

package org.icefit.springicefit.dao;

import org.icefit.springicefit.model.Client;
import org.icefit.springicefit.model.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserDao extends CrudRepository<User,Long> {

    Optional<User> findByEmailIgnoreCase(String email);

    Optional<User> findByUsernameIgnoreCase(String username);

    @EntityGraph(attributePaths = "trainingPlan") // Eagerly fetch the training plan
    @Query("SELECT c FROM Client c WHERE c.id = :clientId")
    Client findClientByIdWithTrainingPlan(@Param("clientId") int clientId);
}

package org.icefit.springicefit.service;


import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import jakarta.annotation.PostConstruct;

import org.icefit.springicefit.model.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.stream.Collectors;

@Service
public class JWTService {


    @Value("${jwt.algorithm.key}")
    private String algorithmKey;
    @Value("${jwt.issuer}")
    private String issuer;
    @Value("${jwt.expiryInSeconds}")
    private int expiryInSeconds;
    private Algorithm algorithm;

    private static final String USERNAME_KEY = "USERNAME";
    private static final String USER_ID_KEY = "USER_ID";
    private static final String ROLES_KEY = "ROLES";
    @PostConstruct
    public void postConstruct(){
        algorithm = Algorithm.HMAC256(algorithmKey);
    }

    public String generateJWT(User user){
        String roles = user.getRoles().stream().map(Enum::name).collect(Collectors.joining(","));
        return JWT.create()
                .withClaim(USERNAME_KEY,user.getUsername())
                .withClaim(USER_ID_KEY,user.getId())
                .withClaim(ROLES_KEY,roles)
                .withExpiresAt(new Date(System.currentTimeMillis() + (1000*expiryInSeconds)))
                .withIssuer(issuer)
                .sign(algorithm);
    }

    public String getUsername(String token){
        return JWT.decode(token).getClaim(USERNAME_KEY).asString();
    }

    public int getUserId(String token) {
        return JWT.decode(token).getClaim(USER_ID_KEY).asInt();
    }

    public String getRoles(String token) {
        return JWT.decode(token).getClaim(ROLES_KEY).asString();
    }
}

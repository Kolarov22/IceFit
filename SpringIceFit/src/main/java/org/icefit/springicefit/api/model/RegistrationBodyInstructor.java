package org.icefit.springicefit.api.model;

import jakarta.validation.constraints.*;

public class RegistrationBodyInstructor {
    @NotNull
    @NotBlank
    @Size(min=5,max=64)
    private String username;

    @Email
    @NotBlank
    private String email;

    /*
     * PASSWORD MUST HAVE AT MINIMUM 8 CHARACTERS - ONE LETTER AND ONE NUMBER AT LEAST
     * */
    @NotNull
    @NotBlank
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")
    @Size(min=8,max=64)
    private String password;


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}

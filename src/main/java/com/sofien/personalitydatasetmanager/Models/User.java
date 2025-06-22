package com.sofien.personalitydatasetmanager.Models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String email;

    private String role;

    public User(String username, String password, String email) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = "USER";
    }
}

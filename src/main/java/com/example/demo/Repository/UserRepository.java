package com.example.demo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Users;

import java.util.List;
import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
    List<Users> findAll();
    Users findByEmail(String email);
    Users findUserByEmail(String email);
}
package com.example.demo.Repository;
import com.example.demo.model.AuthenticationToken;
import com.example.demo.model.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository extends JpaRepository<com.example.demo.model.AuthenticationToken,Integer> {
    AuthenticationToken findByUser(Users user);

    AuthenticationToken findByToken(String token);


}

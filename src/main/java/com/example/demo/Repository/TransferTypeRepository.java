package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.TransferType;

@Repository
public interface TransferTypeRepository extends JpaRepository<TransferType, String>{

}

package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Bank;

@Repository
public interface BankRepository extends JpaRepository<Bank, String> {

	Bank findByBic(String bic);

}

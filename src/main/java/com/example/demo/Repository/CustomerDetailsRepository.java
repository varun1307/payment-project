package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.CustomerDetails;

@Repository
public interface CustomerDetailsRepository extends JpaRepository<CustomerDetails, Long> {

	CustomerDetails findByCustomerId(Long customerId);

	CustomerDetails findByAccountHolderName(String accountHolderName);

}

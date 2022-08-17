package com.example.demo.Controller;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.BankRepository;
import com.example.demo.model.Bank;

@RestController
@RequestMapping("/bank")
public class BankController {
	@Autowired
	private BankRepository bankRepository;
	@GetMapping("/{bic}")
	public Optional<Bank> getBankNameByBIC(@PathVariable("bic") String bic) {
		return bankRepository.findById(bic);
	}
	
	@PostMapping("/")
	public void addBankDetails(@RequestBody Bank bank) {
		bankRepository.save(bank);
	}

	
}

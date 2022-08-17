package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.TransferTypeRepository;
import com.example.demo.model.TransferType;

@RestController
@RequestMapping("/transferType")
public class TransferTypeController {
	@Autowired
	private TransferTypeRepository transferTypeRepository;
	
	@PostMapping("/")
	public void addTransferType(@RequestBody TransferType transferType) {
		transferTypeRepository.save(transferType);
	}
	

}

package com.example.demo.Controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Repository.CustomerDetailsRepository;
import com.example.demo.Service.CustomerDetailsService;
import com.example.demo.model.CustomerDetails;
import com.example.demo.model.Transfer;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/customerDetails")
public class CustomerDetailsController {
	@Autowired
	private CustomerDetailsRepository customerDetailsRepository;
	@Autowired
	private CustomerDetailsService customerDetailsService;
	
	@GetMapping("/")
	public List<CustomerDetails> getCustomerDetails(){
		return customerDetailsRepository.findAll();
	}
	
	@PostMapping("/add")
	public void addCustomerDetails(@RequestBody CustomerDetails customerDetails) {
		customerDetailsRepository.save(customerDetails);
	}
	
	@GetMapping("/id/{customerId}")
	public Optional<CustomerDetails> getCustomerDetailsById(@PathVariable("customerId") Long accountNumber  ) {
		return customerDetailsRepository.findById(accountNumber);
	}
	
	@PostMapping("/id")
	public CustomerDetails getCust(@RequestBody CustomerDetails customer) {
		Optional<CustomerDetails> cust=customerDetailsRepository.findById(customer.getCustomerId());
		if (cust.isPresent()) {
		return customerDetailsRepository.findByCustomerId(customer.getCustomerId());}
		return null;
		
	}

	
	@PostMapping("/transfer")
	public String makeTransfer(@RequestBody Transfer transfer) {
		CustomerDetails senderInput=transfer.getSender();
		CustomerDetails receiverInput=transfer.getReceiver();
		Integer amountInput=transfer.getAmount();
		Optional<CustomerDetails> senderPresent=customerDetailsRepository.findById(senderInput.getCustomerId());
		Optional<CustomerDetails> receiverPresent=customerDetailsRepository.findById(receiverInput.getCustomerId());
		String res="";
		if(senderPresent != null && receiverPresent!=null) {
			res=customerDetailsService.accountToAccountTransfer(senderInput, receiverInput, amountInput);
		}
		else {
			res="Account Number is not valid";
		}
		return res;
	}
	
}

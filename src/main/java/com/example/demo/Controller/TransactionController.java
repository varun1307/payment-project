package com.example.demo.Controller;

import java.io.FileNotFoundException;
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

import com.example.demo.Repository.BankRepository;
import com.example.demo.Repository.CustomerDetailsRepository;
import com.example.demo.Repository.TransactionRepository;
import com.example.demo.Service.CustomerDetailsService;
import com.example.demo.Service.TransactionService;
import com.example.demo.model.Bank;
import com.example.demo.model.CustomerDetails;
import com.example.demo.model.Transaction;
import com.example.demo.model.TransferType;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/transaction")
public class TransactionController {
	@Autowired
	private CustomerDetailsRepository customerDetailsRepository;
	@Autowired
	private BankRepository bankRepository;
	@Autowired
	private CustomerDetailsService customerDetailsService;
	@Autowired
	private TransactionRepository transactionRepository;
	@Autowired
	private TransactionService transactionService;

	@GetMapping("/")
	public List<Transaction> getAllTransactions() {
		return transactionRepository.findAll();
	}
	@GetMapping("/{transactionId}")
	public Transaction getTransaction(@PathVariable(name="transactionId") Integer id) {
		return transactionRepository.findByTransactionId(id);
	}
	
	@PostMapping("/id")
	public Transaction getCust(@RequestBody Transaction transaction) {
		Optional<Transaction> cust=transactionRepository.findById(transaction.getTransactionId());
		if (cust.isPresent()) {
		return transactionRepository.findByTransactionId(transaction.getTransactionId());}
		return null;
		
	}
//	@GetMapping("/top5/")
//	public List<Transaction> getTop5Transactions() {
//		return transactionRepository.findByTop2ByOrderByTransactionTimeDesc(); // findByOrderBySeatNumberAsc;
//	}

	@PostMapping("/transfer")
	public String makeATransaction(@RequestBody Transaction transactionDto) throws FileNotFoundException {
		CustomerDetails senderInput = transactionDto.getSender();
		Bank bankInput = transactionDto.getBank();
		String receiverNameInput = transactionDto.getReceiverAccountHolderName();
		TransferType transferTypeInput = transactionDto.getTransferType();
		Integer amount = transactionDto.getAmount();
		transactionDto.setAmount((int) (transactionDto.getAmount()-(transactionDto.getAmount()*(0.0025))));
		String res = "";

		Optional<CustomerDetails> senderPresent = customerDetailsRepository.findById(senderInput.getCustomerId());
		Optional<Bank> bankPresent = bankRepository.findById(bankInput.getBic());
		if (senderPresent.isPresent()) {
			CustomerDetails senderDetails = customerDetailsRepository.findByCustomerId(senderInput.getCustomerId());
			if (transferTypeInput.getTransferTypeCode().equals(
					customerDetailsService.getTransferTypeDetailsByName(senderDetails.getAccountHolderName()))) {
				if(transactionService.getWordStatus(receiverNameInput)==true) {
					transactionDto.setStatus("Onhold");
					res="Transaction can not be made to this Account Holder";

					transactionRepository.save(transactionDto);
				}
				else if (bankPresent.isPresent() && transactionService.getWordStatus(receiverNameInput)==false) { // add not in sdn list using and condition
					if (customerDetailsService.makeTransaction(senderInput, bankInput, receiverNameInput, transferTypeInput,amount)=="Balance Insufficient"){
						transactionDto.setStatus("Failed");
					}
					else {
					transactionDto.setStatus("Success");
					}
					transactionRepository.save(transactionDto);
					res=customerDetailsService.makeTransaction(senderInput, bankInput, receiverNameInput, transferTypeInput,
							amount);
				}
				else {
					
					res = "Receiver BIC not found";
				}
			} else {
				res = "Choose correct Transfer Type";
			}
		} else {
			res = "Sender's account invalid";
		}

		return res;

	}
}

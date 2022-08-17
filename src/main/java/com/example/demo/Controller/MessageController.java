package com.example.demo.Controller;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.MessageRepository;
import com.example.demo.model.Message;

@RestController
@RequestMapping("/message")
public class MessageController {
	@Autowired
	private MessageRepository messageRepository;
	@GetMapping("/{messageCode}")
	public Optional<Message> getBankNameByBIC(@PathVariable("messageCode") String msgCode) {
		return messageRepository.findById(msgCode);
	}
	
	@PostMapping("/")
	public void addMessageCode(@RequestBody Message message) {
		messageRepository.save(message);
	}
}

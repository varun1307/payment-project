package com.example.demo.Service;

import java.io.FileInputStream;
import java.util.Scanner;

import org.springframework.stereotype.Service;
import java.io.FileNotFoundException;

@Service
public class TransactionService {

	public static boolean getWordStatus(String word) throws FileNotFoundException {
		Scanner sc2 = new Scanner(new FileInputStream("C:\\Users\\Administrator\\Downloads\\sdnlist.txt"));

		while (sc2.hasNextLine()) {
			String line = sc2.nextLine().toLowerCase();
			if (line.indexOf(word.toLowerCase()) != -1) {
				return true;
			}
		}
		return false;
	}
}

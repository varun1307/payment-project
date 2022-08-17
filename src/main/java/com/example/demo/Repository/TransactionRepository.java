package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

	Transaction findByTransactionId(Integer id);
	
//	@Query("SELECT * FROM Entity e ORDER BY e.id LIMIT :limit", nativeQuery=true)
//	Entity getEntitiesByLimit(@Param("limit") int limit);


//	List<Transaction> findByTop2ByOrderByTransactionTimeDesc();

}

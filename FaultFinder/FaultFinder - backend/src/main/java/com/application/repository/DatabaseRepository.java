package com.application.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.CrudRepository;

import com.application.model.Data;
import java.util.List;


public interface DatabaseRepository extends CrudRepository<Data, Integer> {
	
	@Query("SELECT d FROM Data d WHERE d.username like %:string% ")
	public List<Data> rech(@Param("string") String string);


}

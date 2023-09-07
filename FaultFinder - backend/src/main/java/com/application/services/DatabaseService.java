package com.application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.model.Data;
import com.application.repository.DatabaseRepository;


@Service
public class DatabaseService {
	
	@Autowired
	private DatabaseRepository databaseRepo;
	
	public Data addNewDatabase(Data database) {
		return databaseRepo.save(database);
	}
	
	public List<Data> getAllDatabases(){
		return(List<Data>)databaseRepo.findAll();
	}
	
	public Data getData(Integer id) {
		
		return databaseRepo.findById(id).orElse(null);
	}
	

}

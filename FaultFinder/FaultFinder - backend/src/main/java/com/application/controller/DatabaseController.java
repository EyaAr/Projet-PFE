package com.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import com.application.model.Company;
import com.application.model.Data;
import com.application.repository.DatabaseRepository;
import com.application.services.DatabaseService;

@RestController
public class DatabaseController {
	
	@Autowired
	private DatabaseService databaseService;
	
	
	@GetMapping("/databaseslist")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Data>> getAllDatabases() throws Exception
	{
		List<Data> databases = databaseService.getAllDatabases();
		return new ResponseEntity<List<Data>>(databases,HttpStatus.OK);
		
	}
	
	@PostMapping("/addDatabase")
	@CrossOrigin(origins = "http://localhost:4200")
	public Data addNewDatabase(@RequestBody Data database) throws Exception
	{
		Data dataObj = null;
		dataObj = databaseService.addNewDatabase(database);
		return dataObj;
	}
	
	@GetMapping("/getData/{data-id}")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public Data getData(@PathVariable("data-id") Integer id) {
		return databaseService.getData(id);
	}
	

	@GetMapping("/gettotalDatas")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> gettotalDatas() throws Exception
	{
		List<Data> datas = databaseService.getAllDatabases();
		List<Integer> datasCount = new ArrayList<>();
		datasCount.add(datas.size());
		return new ResponseEntity<List<Integer>>(datasCount, HttpStatus.OK);
	}
	
	@GetMapping("/recherche/{string}")
	@CrossOrigin(origins = "http://localhost:4200")
	@ResponseBody
	public List<Data> rechercheData(@PathVariable("string") String rech){
		List<Data> d = databaseService.rechercheData(rech);
		return d;
	}
	


}

package com.application.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.application.model.Manager;
import com.application.services.ManagerService;



@RestController
public class ManagerController 
{	
	@Autowired
	private ManagerService managerService;
	

	
	
	@GetMapping("/managerlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Manager>> getManagerList() throws Exception
	{
		List<Manager> managers = managerService.getAllManagers();
		return new ResponseEntity<List<Manager>>(managers, HttpStatus.OK);
	}
	
	
	
	
	@GetMapping("/managerlistbyemail/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Manager>> getManagerListByEmail(@PathVariable String email) throws Exception
	{
		List<Manager> managers = managerService.getManagersByEmail(email);
		return new ResponseEntity<List<Manager>>(managers, HttpStatus.OK);
	}
	
	@PostMapping("/addManager")
	@CrossOrigin(origins = "http://localhost:4200")
	public Manager addNewManager(@RequestBody Manager manager) throws Exception
	{
		Manager managerObj = null;
		String newID = getNewID();
		manager.setManagerid(newID);
		managerObj = managerService.addNewManager(manager);
		managerService.updateStatus(manager.getEmail());
		return managerObj;
	}
	
	
	
	
	@GetMapping("/acceptstatus/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<String>> updateStatus(@PathVariable String email) throws Exception
	{
		managerService.updateStatus(email);
		List<String> al=new ArrayList<>();
		al.add("accepted");
		return new ResponseEntity<List<String>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/rejectstatus/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<String>> rejectStatus(@PathVariable String email) throws Exception
	{
		managerService.rejectStatus(email);
		List<String> al=new ArrayList<>();
		al.add("rejected");
		return new ResponseEntity<List<String>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/managerprofileDetails/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Manager>> getProfileDetails(@PathVariable String email) throws Exception
	{
		List<Manager> managers = managerService.fetchProfileByEmail(email);
		return new ResponseEntity<List<Manager>>(managers, HttpStatus.OK);
	}
	
	@PutMapping("/updatemanager")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<Manager> updateManagerProfile(@RequestBody Manager manager) throws Exception
	{
		Manager managerobj = managerService.updateManagerProfile(manager);
		return new ResponseEntity<Manager>(managerobj, HttpStatus.OK);
	}
	
	@GetMapping("/gettotalmanagers")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalManagers() throws Exception
	{
		List<Manager> managers = managerService.getAllManagers();
		List<Integer> managersCount = new ArrayList<>();
		managersCount.add(managers.size());
		return new ResponseEntity<List<Integer>>(managersCount, HttpStatus.OK);
	}
	
	
  
  
	
	public String getNewID()
	{
		String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"0123456789"+"abcdefghijklmnopqrstuvxyz";
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 12; i++) 
        {
            int index = (int)(AlphaNumericString.length() * Math.random());
            sb.append(AlphaNumericString.charAt(index));
        }
        return sb.toString();
	}
	
}

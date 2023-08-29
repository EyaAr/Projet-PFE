package com.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.application.model.Manager;
import com.application.model.User;
import com.application.services.ManagerService;
import com.application.services.UserService;

@RestController
public class LoginController 
{
	@Autowired
	private UserService userService;
	
	@Autowired
	private ManagerService managerService;
	
	@GetMapping("/")
    public String welcomeMessage()
    {
    	return "Welcome  !!!";
    }
	
	@PostMapping("/loginuser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User loginUser(@RequestBody User user) throws Exception
	{
		String currEmail = user.getEmail();
		String currPassword = user.getPassword();
		
		User userObj = null;
		if(currEmail != null && currPassword != null)
		{
			userObj = userService.fetchUserByEmailAndPassword(currEmail, currPassword);
		}
		if(userObj == null)
		{
			throw new Exception("User does not exists!!! Please enter valid credentials...");
		}		
		return userObj;
	}
	
	@PostMapping("/loginmanager")
	@CrossOrigin(origins = "http://localhost:4200")
	public Manager loginDoctor(@RequestBody Manager manager) throws Exception
	{
		String currEmail = manager.getEmail();
		String currPassword = manager.getPassword();
		
		Manager professorObj = null;
		if(currEmail != null && currPassword != null)
		{
			professorObj = managerService.fetchManagerByEmailAndPassword(currEmail, currPassword);
		}
		if(professorObj == null)
		{
			throw new Exception("Manager does not exists!!! Please enter valid credentials...");
		}		
		return professorObj;
	}
}
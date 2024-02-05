package com.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.application.model.Manager;
import com.application.model.User;
import com.application.services.ManagerService;
import com.application.services.UserService;

@RestController
public class RegistrationController 
{
	@Autowired
	private UserService userService;
	
	@Autowired
	private ManagerService managerService;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User registerUser(@RequestBody User user) throws Exception
	{
		String currEmail = user.getEmail();
		String newID = getNewID();
		user.setUserid(newID);
		
		if(currEmail != null || !"".equals(currEmail))
		{
			User userObj = userService.fetchUserByEmail(currEmail);
			if(userObj != null)
			{
				throw new Exception("User with "+currEmail+" already exists !!!");
			}
		}
		User userObj = null;
		userObj = userService.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/registermanager")
	@CrossOrigin(origins = "http://localhost:4200")
	public Manager registerDoctor(@RequestBody Manager manager) throws Exception
	{
		String currEmail = manager.getEmail();
		String newID = getNewID();
		manager.setManagerid(newID);
		
		if(currEmail != null || !"".equals(currEmail))
		{
			Manager managerObj = managerService.fetchManagerByEmail(currEmail);
			if(managerObj != null)
			{
				throw new Exception("Manager with "+currEmail+" already exists !!!");
			}
		}
		Manager managerObj = null;
		managerObj = managerService.saveManager(manager);
		managerService.setStatus(manager.getEmail());
		return managerObj;
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
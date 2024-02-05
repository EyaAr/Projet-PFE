package com.application.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.application.model.Manager;
import com.application.repository.ManagerRepository;

@Service
public class ManagerService 
{
	@Autowired
	private ManagerRepository managerRepo;
	@Autowired
    private EmailService emailService;
	
	
	public Manager saveManager(Manager manager)
	{
		return managerRepo.save(manager);
	}
	
	public Manager addNewManager(Manager manager)
	{
		return managerRepo.save(manager);
	}
	
	public Manager updateManagerProfile(Manager manager)
	{
		return managerRepo.save(manager);
	}
	
	public List<Manager> getAllManagers()
	{
		return (List<Manager>)managerRepo.findAll();
	}
	
	public List<Manager> getManagerListByEmail(String email) 
	{
		return (List<Manager>)managerRepo.findManagerListByEmail(email);
	}
	
	public Manager fetchManagerByEmail(String email)
	{
		return managerRepo.findByEmail(email);
	}
	
	public Manager fetchManagerByManagername(String managername)
	{
		return managerRepo.findByManagername(managername);
	}
	
	public Manager fetchManagerByEmailAndPassword(String email, String password)
	{
		return managerRepo.findByEmailAndPassword(email, password);
	}
	
	public List<Manager> fetchProfileByEmail(String email)
	{
		return (List<Manager>)managerRepo.findProfileByEmail(email);
	}
	
	public void setStatus(String email) 
	{
		managerRepo.setStatus(email);
	}

	public void updateStatus(String email) 
	{
		String to = email;
        String subject = "Manager Position Application";
        String body = "Dear Applicant,\nWe are delighted to extend our warmest congratulations on your successful application for the Manager position at our company. After careful consideration and evaluation, we are pleased to inform you that you have been selected as the ideal candidate for this role.,\n We are excited to welcome you to our team and look forward to working closely with you to achieve our mutual goals. We are confident that your contributions as a Manager will have a significant impact on our organization's growth and success.. Please let us know if you have any questions or require any additional information.,\n Best regards,";
        emailService.sendEmail(to, subject, body);
		managerRepo.updateStatus(email);
	}
	
	Manager manager = new Manager();
	String email = manager.getEmail();

	public void rejectStatus(String email) 
	{
		  String to = email;
	        String subject = "Manager Position Application";
	        String body = "Dear Applicant,\nWe hope this email finds you well.,\n We sincerely appreciate the time and effort you invested in submitting your application for the Manager position at our company.,\n Your qualifications and experience were impressive, and we were honored to consider you for this role.After careful consideration, we regret to inform you that we have decided not to move forward with your application at this time.Thank you once again for considering our organization as a potential employer.,\n Best regards,";
	        emailService.sendEmail(to, subject, body);
	        
		managerRepo.rejectStatus(email);
	}

	public List<Manager> getManagersByEmail(String email)
	{
		return managerRepo.findManagerListByEmail(email);
	}
}
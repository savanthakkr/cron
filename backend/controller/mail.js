// Importing packages 
const cron = require("node-cron"); 
const express = require("express"); 
const nodemailer = require("nodemailer"); 

app = express(); 

let counter = 0;

// Calling sendEmail() function every 1 minute 


// while(counter < limit){
//   counter = counter + 1;
     
//   }
async function f1() {
  // do something
  
  counter++
}


cron.schedule("1 * * * * *", function() { 
        
  sendMail(); 
}); 



// Send Mail function using Nodemailer 
function sendMail() { 
	let mailTransporter = nodemailer.createTransport({ 
		service: "gmail", 
		auth: { 
      user: 'sponda.netclues@gmail.com',
      pass: 'qzfm wlmf ukeq rvvb'
		} 
	}); 
	
	// Setting credentials 
	let mailDetails = { 
		from: "sponda.netclues@gmail.com", 
		to: "savanponda11@gmail.com", 
		subject: "Test mail using Cron job", 
		text: `total number ${counter = counter+1}`
	}; 
	
	
	// Sending Email 
	mailTransporter.sendMail(mailDetails, 
					function(err, data) { 
		if (err) { 
			console.log("Error Occurs", err); 
		} else { 
			console.log("Email sent successfully"); 
		} 
	}); 
} 

app.listen(3000); 

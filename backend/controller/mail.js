// Importing packages 
const cron = require("node-cron"); 
const express = require("express"); 
const nodemailer = require("nodemailer"); 
const { sequelize } = require('../config/db');
const { QueryTypes, Sequelize } = require('sequelize');

app = express(); 

const counter = 0;



cron.schedule("1 * * * * *", function() { 
	sendMail(); 
	// updateCategory();
  });
	
	


const updateCategory = async (req, res) => {
	try {
	//   const categoryId = req.params.id;
	//   const { categoryname } = req.body;
  
	  await sequelize.query(
		'UPDATE categories SET id = ? WHERE ids = ?',
		{ replacements: [counter, 1], type: QueryTypes.UPDATE }
		
	  );
	  res.json({ message: 'Category updated successfully' });
	} catch (error) {
	  console.error('Error updating category:', error);
	  res.status(500).json({ error: 'Internal server error' });
	}
	
  };


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

module.exports = {updateCategory}
// i want to store counter on mysql database and auto update value when change counter value
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const fs = require('fs');
const path = require('path');
const { resourceLimits } = require('worker_threads');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "sponda.netclues@gmail.com",
        pass: "qzfm wlmf ukeq rvvb"
    }
});

const sendCounterMail = async (req, res) => {
    try {
        const email = "sponda.netclues@gmail.com";

        const previousCounter = await sequelize.query(`SELECT mailCounter FROM register WHERE id = 1`, { type: QueryTypes.SELECT });
        console.log("previousCounterpreviousCounter", previousCounter);

        const updatedCounter = parseInt(previousCounter[0].mailCounter) + 1;
        
        await sequelize.query(`UPDATE register SET mailCounter = ? WHERE id = 1 `, { replacements: [updatedCounter], type: QueryTypes.INSERT }).then((res) => {
            const mailOptions = {
                from: "sponda.netclues@gmail.com",
                to: 'savanponda11@gmail.com',
                subject: 'Updated Count',
                text: `Your Updated Count is ${updatedCounter}`
            }

            transporter.sendMail(mailOptions, (err, result) => {
                if (err){
                console.log(err)
                    res.json('Oops error occurred')
                } else{
                    res.json('thanks for emailing me');
                }
            })
        })
        
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = {  sendCounterMail };
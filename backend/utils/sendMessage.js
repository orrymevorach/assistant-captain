const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.accountSid; // Your Account SID from www.twilio.com/console
const authToken = process.env.authToken; // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);

const contacts = {
  '+16473891211': 'Orry',
};

function sendMessage(req) {
  client.messages.create({
    body: `${contacts[req.body.From]} is in!`,
    to: process.env.toPhone,
    from: process.env.fromPhone, // From a valid Twilio number
  });
}

module.exports = sendMessage;

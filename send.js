// // Download the helper library from https://www.twilio.com/docs/node/install
// // Find your Account SID and Auth Token in Account Info
// // and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages 
// .create({body: 'Hi there', from: '+15619337596', to: '+16473891211'})
// .then(message => console.log(message.sid));




const twilio = require('twilio');

// const accountSid = 'SK10098540f6220e4bc1c218726e4aff50'; // Your Account SID from www.twilio.com/console
// const authToken = 'ltXFInBoz6JHe6TmCxdTYAQvpCkiGyUo'; // Your Auth Token from www.twilio.com/console

const accountSid = 'ACc402efa5e307a98b8879d6901abdb5e4'; // Your Account SID from www.twilio.com/console
const authToken = '7a8b80789b4902185beebeb77404712a'; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);


client.messages
  .create({
    body: 'Are you in for ball tonight? Type "1" for yes, or "2" for no.',
    to: '+16473891211', // Text this number
    from: '+15619337596', // From a valid Twilio number
  })
  .then((message) => console.log(message));
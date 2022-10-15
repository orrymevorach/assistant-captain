const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;
const serverless = require('serverless-http');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    hello: 'hi',
  });
});

router.get('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  const phoneNumber = req.body.From;
  if (req.body.Body == '1') {
    twiml.message(`See ya tonight! 🏀`);
  } else if (req.body.Body == '2') {
    twiml.message('Lame 👎');
  } else {
    twiml.message(
      'No Body param match, Twilio sends this in the request to your server.'
    );
  }

  res.type('text/xml').send(twiml.toString());
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);

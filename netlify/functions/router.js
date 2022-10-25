const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;
const serverless = require('serverless-http');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

router.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  if (req.body.Body == '1') {
    twiml.message(`See ya tonight! 🏀`);
  } else if (req.body.Body == '2') {
    twiml.message('Lame 👎');
  } else {
    twiml.message('Please respond with either "1" or "2"');
  }

  res.type('text/xml').send(twiml.toString());
});

app.use('/.netlify/functions/router', router);

module.exports.handler = serverless(app);

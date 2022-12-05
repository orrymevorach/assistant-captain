const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;
const serverless = require('serverless-http');
const sendMessage = require('../../utils/sendMessage');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

router.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  const isAttending = req.body.Body === '1';
  const isNotAttending = req.body.Body === '2';
  if (isAttending) {
    twiml.message(`See ya tonight! 🏀`);
    sendMessage(req);
  } else if (isNotAttending) {
    twiml.message('Lame 👎');
  } else {
    twiml.message('Please respond with either "1" or "2"');
  }

  res.type('text/xml').send(twiml.toString());
});

app.use('/.netlify/functions/router', router);

module.exports.handler = serverless(app);

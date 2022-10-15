const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

const users = {
  ['+16473891211']: 'Orry',
};
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  const phoneNumber = req.body.From;
  const player = users[phoneNumber] || '';
  if (req.body.Body == '1') {
    twiml.message(`See ya tonight ${player}! 🏀`);
  } else if (req.body.Body == '2') {
    twiml.message('Lame 👎');
  } else {
    twiml.message(
      'No Body param match, Twilio sends this in the request to your server.'
    );
  }

  res.type('text/xml').send(twiml.toString());
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

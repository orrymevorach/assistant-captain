const { schedule } = require('@netlify/functions');
const sendMessage = require('../../scripts/sendMessage');

const handler = async function (event, context) {
  await sendMessage();
  return {
    statusCode: 200,
  };
};

module.exports.handler = schedule('* * * * *', handler);

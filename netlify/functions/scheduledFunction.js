const { schedule } = require('@netlify/functions');
const sendMessage = require('../../scripts/sendMessage');

const handler = async function (event, context) {
  await sendMessage();
};

module.exports.handler = schedule('* * * * *', handler);

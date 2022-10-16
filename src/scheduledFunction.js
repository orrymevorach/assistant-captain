const { schedule } = require('@netlify/functions');
const run = require('./send');

const handler = async function (event, context) {
  await run();
  return {
    statusCode: 200,
  };
};

module.exports.handler = schedule('* * * * *', handler);

const pPipe = require('p-pipe');

// Pipes
const identifyUserAgent = require('./identifyUserAgent');
const identifyWebsite = require('./identifyWebsite');
const findLayout = require('./findLayout');
const parseTemplate = require('./parseTemplate/stable');

module.exports = async function(data, request, response) {
  let pipeline = pPipe(identifyUserAgent, identifyWebsite, findLayout, parseTemplate, a => {
    console.log();
    return a;
  });

  return await pipeline({ request, response, data });
};
// slackBot.js

const { WebClient } = require('@slack/web-api');

async function postMessageToSlack() {
  const token = process.env.SLACK_BOT_TOKEN;
  const web = new WebClient(token);
  const conversationId = 'C05UPN42E12';

  try {
    const result = await web.chat.postMessage({
      text: 'Hello world!',
      channel: conversationId,
    });
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = postMessageToSlack;

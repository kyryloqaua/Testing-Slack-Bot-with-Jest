// slackBot.js

const { WebClient, LogLevel } = require("@slack/web-api");
const token = process.env.SLACK_BOT_TOKEN;

const client = new WebClient(token, {
  logLevel: LogLevel.DEBUG,
});

async function postMessageToSlack() {
  const conversationId = 'C05UPN42E12';

  try {
    const result = await client.chat.postMessage({
      text: 'Hello world!',
      channel: conversationId,
    });
    return result;
  } catch (error) {
    throw error;
  }
}

async function uploadFile() {
  try {
    const result = await client.files.uploadV2({
      file: '/Users/bielohryvtsev/slack-bot/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9.png',
      filename: 'eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9.png',
      channel_id: 'C05UPN42E12',
      initial_comment: 'Here is the new logo.',
    });

    return result;
  } catch (error) {
    throw error;
  }
}

async function scheduleMessage() {
  const channelId = 'C05UPN42E12';

  try {
    const today = new Date();
    today.setHours(13, 35, 0, 0);

    const result = await client.chat.scheduleMessage({
      channel: channelId,
      text: 'Scheduled message for 3 PM today',
      post_at: today.getTime() / 1000,
    });

    return result;
  } catch (error) {
    throw error;
  }
}

async function deleteMessage() {
  const channelId = 'C05UPN42E12';
  const messageId = '1697228872.524269';

  try {
    const result = await client.chat.delete({
      channel: channelId,
      ts: messageId,
    });

    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  postMessageToSlack,
  uploadFile,
  scheduleMessage,
  deleteMessage,
};

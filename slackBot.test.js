// slackBot.test.js

const {
  postMessageToSlack,
  uploadFile,
  scheduleMessage,
  deleteMessage,
} = require('./slackBot');

describe('Slack Bot Message Posting', () => {
  test('Should successfully post a message to Slack and return a valid result', async () => {
    const result = await postMessageToSlack();

    expect(result).toBeDefined();
    expect(result.ok).toBe(true);
    expect(result.ts).toBeDefined();
    expect(result.message).toBeDefined();
    expect(result.message.bot_id).toBe('B061A3Z07G9');
    expect(result.message.text).toBe('Hello world!');
  });
});

describe('Slack Bot File Upload', () => {
  test('Should successfully upload a file to Slack and return a valid result', async () => {
    const result = await uploadFile();

    expect(result).toBeDefined();
    expect(result.ok).toBe(true);
  });
});

describe('Slack Bot Scheduled Message', () => {
  test('Should successfully schedule a message on Slack and return a valid result', async () => {
    const result = await scheduleMessage();

    expect(result).toBeDefined();
    expect(result.ok).toBe(true);
    expect(result.message.bot_id).toBe('B061A3Z07G9');
    expect(result.message.text).toBe('Scheduled message for 3 PM today');
  });
});

describe('Slack Bot Message Deletion', () => {
  test('Should successfully delete a message on Slack and return a valid result', async () => {
    const result = await deleteMessage();

    expect(result).toBeDefined();
    expect(result.ok).toBe(true);
  });
});

// slackBot.test.js

const postMessageToSlack = require('./slackBot');

describe('Slack Bot Message Posting', () => {
  test('Should successfully post a message to Slack and return a valid result', async () => {
    const result = await postMessageToSlack();

    // Assertion Step 1: Check if the result is defined
    expect(result).toBeDefined();

    // Assertion Step 2: Check if the 'ok' property is true
    expect(result.ok).toBe(true);

    // Assertion Step 3: Check if the 'ts' property exists
    expect(result.ts).toBeDefined();

    // Assertion Step 4: Check properties within the 'message' object
    expect(result.message).toBeDefined();
    expect(result.message.bot_id).toBe('B061A3Z07G9');
    expect(result.message.text).toBe('Hello world!');

    // You can perform additional validation as needed
  });

  test('Should have a true "ok" property in the response', async () => {
    const result = await postMessageToSlack();

    // Additional Test: Check if the 'ok' property in the response is true
    expect(result.ok).toBe(true);
  });
});

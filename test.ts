import { SlackSDK } from './index';

const slackToken = process.env.SLACK_TOKEN || '';

(async () => {
  const slack = new SlackSDK(slackToken);
  await slack.sendMessageToAllChannels('Hello, Slack!');
})();

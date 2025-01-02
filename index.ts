import { WebClient } from '@slack/web-api';

export class SlackSDK {
  private client: WebClient;

  constructor(token: string) {
    this.client = new WebClient(token);
  }

  // Join a channel by ID
  private async joinChannel(channelId: string): Promise<void> {
    try {
      await this.client.conversations.join({ channel: channelId });
      console.log(`Joined channel: ${channelId}`);
    } catch (err) {
      console.error(`Failed to join channel ${channelId}:`, err);
    }
  }

  // Fetch all channels in the workspace
  async getAllChannels(): Promise<string[]> {
    const result = await this.client.conversations.list({
      types: 'public_channel', // Fetch public channels only
    });
    return result.channels?.map((channel) => channel.id || '') || [];
  }

  // Send a message to all channels
  async sendMessageToAllChannels(message: string): Promise<void> {
    const channelIds = await this.getAllChannels();

    for (const channelId of channelIds) {
      try {
        // Join the channel first
        await this.joinChannel(channelId);

        // Send a message to the channel
        await this.client.chat.postMessage({
          channel: channelId,
          text: message,
        });
        console.log(`Message sent to channel: ${channelId}`);
      } catch (err) {
        console.error(`Failed to send message to channel ${channelId}:`, err);
      }
    }
  }
}

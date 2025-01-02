
# Slack Message Sender SDK

This SDK allows you to send messages to all channels in a Slack workspace using a bot, with minimal setup. Follow the steps below to get started.

---

## 1. Create a Slack App

1. **Go to Slack API Dashboard:**
   - Visit [Slack API: Create an App](https://api.slack.com/apps).

2. **Click "Create an App":**
   - Choose **"From Scratch"**.
   - Enter a name for your app (e.g., `SlackMessageSender`) and select the Slack workspace where the app will be used.

3. **Add Required Scopes:**
   - Navigate to the **OAuth & Permissions** section in your app's settings.
   - Under **Bot Token Scopes**, add the following:
     - `channels:join`
     - `chat:write`
     - `channels:read`
     - `groups:read`

4. **Install the App:**
   - Go to the **Install App** section in the settings.
   - Click **"Install App to Workspace"** and authorize the app.
   - Copy the **Bot User OAuth Token** (starts with `xoxb-`).

---

## 2. Set Up Environment Variables

1. **Create a `.env` file:**
   In the root of your project, create a file named `.env` and add the following:

   ```env
   SLACK_TOKEN=xoxb-your-slack-bot-token
   ```

   Replace `xoxb-your-slack-bot-token` with the token you copied in the previous step.

---

## 3. Run the SDK

1. **Install Dependencies (if not already installed):**
   Ensure you have the required dependencies installed by running:

   ```bash
   bun install
   ```

2. **Run the SDK:**
   Setup the message in test.ts
   Use the following command to execute the script:

   ```bash
   bun run test.ts
   ```

   Replace `test` with the filename of your TypeScript file that uses the Slack SDK.

---

Your bot will now send messages to all channels in your workspace!

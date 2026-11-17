
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", async () => {
  try {
    const channel = await client.channels.fetch(
      process.env.CHANNEL_ID
    );

    await channel.send({
      content: `<@&${process.env.ROLE_ID}> spike minigame`,
      allowedMentions: {
        roles: [process.env.ROLE_ID]
      }
    });

    console.log("Spike minigame reminder sent!");
    client.destroy();
    process.exit(0);
  } catch (error) {
    console.error(error);
    client.destroy();
    process.exit(1);
  }
});

client.login(process.env.DISCORD_TOKEN);

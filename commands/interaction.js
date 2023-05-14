const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
  StringSelectMenuBuilder,
} = require("discord.js");

// Set up the command for deployment.
module.exports = {
  data: new SlashCommandBuilder()
    .setName("interaction")
    .setDescription("Create an interactable object.")
    .setDefaultMemberPermissions("32") // Member has manage server permissions.
    .setDMPermission(false)
    .addStringOption((option) =>
      option
        .setName("create")
        .setDescription("The object you wish to create.")
        .setRequired(true)
        .addChoices({ name: "Boss Timer", value: "bossTimerMenu" })
    )
    .addStringOption((option) =>
      option
        .setName("bossmenu")
        .setDescription("The boss timer menu you wish to create.")
        .addChoices(
          { name: "Apophis", value: "apophisMenu" },
          { name: "Barbarossa", value: "barbarossaMenu" },
          { name: "Culton", value: "cultonMenu" },
          { name: "Devourer", value: "devourerMenu" },
          { name: "Dragon", value: "dragonMenu" },
          { name: "Eva", value: "evaMenu" },
          { name: "Frost Bot", value: "frostbotMenu" },
          { name: "Haboela", value: "haboelaMenu" },
          { name: "Nakya", value: "nakyaMenu" },
          { name: "Harrah", value: "harrahMenu" },
          { name: "Lucia", value: "luciaMenu" },
          { name: "Magma", value: "magmaMenu" },
          { name: "Robarg", value: "robargMenu" },
          { name: "Rudolph", value: "rudolphMenu" },
          { name: "Scylla", value: "scyllaMenu" },
          { name: "Sobek", value: "sobekMenu" }
        )
    ),

  // Execute the command.
  async execute(interaction) {
    try {
      // Remove the command's reply.
      await interaction.deferReply({ ephemeral: true });
      await interaction.deleteReply();
      // Find the user-specified values of the command.
      const object = interaction.options.getString("create");
      const bossMenu = interaction.options.getString("bossmenu");
      if (object === "bossTimerMenu") {
        // Make a buton that replies with a countdown of the user's line change.
        const lineCooldownButton = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setCustomId("lineCooldown")
            .setLabel(`Line Cooldown Timer`)
            .setStyle(ButtonStyle.Secondary)
        );
        // Cache the channel the interaction came from.
        const channel = client.channels.cache.get(interaction.channelId);
        if (bossMenu === "apophisMenu") {
          // Build select menus.
          const apophisSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("apophisTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `apophisChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `apophisChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `apophisChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `apophisChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `apophisChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `apophisChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `apophisChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `apophisChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `apophisChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `apophisChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `apophisChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `apophisChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `apophisChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `apophisChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `apophisChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `apophisChannel16`,
                },
                {
                  label: `Channel 17`,
                  value: `apophisChannel17`,
                },
                {
                  label: `Channel 18`,
                  value: `apophisChannel18`,
                },
                {
                  label: `Channel 19`,
                  value: `apophisChannel19`,
                },
                {
                  label: `Channel 20`,
                  value: `apophisChannel20`,
                },
                {
                  label: `Channel 21`,
                  value: `apophisChannel21`,
                },
                {
                  label: `Channel 22`,
                  value: `apophisChannel22`,
                },
                {
                  label: `Channel 23`,
                  value: `apophisChannel23`,
                },
                {
                  label: `Channel 24`,
                  value: `apophisChannel24`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, apophisSelector],
          });
        }
        if (bossMenu === "barbarossaMenu") {
          // Build select menus.
          const barbarossaSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("barbarossaTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `barbarossaChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `barbarossaChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `barbarossaChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `barbarossaChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `barbarossaChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `barbarossaChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `barbarossaChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `barbarossaChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `barbarossaChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `barbarossaChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `barbarossaChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `barbarossaChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `barbarossaChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `barbarossaChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `barbarossaChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `barbarossaChannel16`,
                },
                {
                  label: `Channel 17`,
                  value: `barbarossaChannel17`,
                },
                {
                  label: `Channel 18`,
                  value: `barbarossaChannel18`,
                },
                {
                  label: `Channel 19`,
                  value: `barbarossaChannel19`,
                },
                {
                  label: `Channel 20`,
                  value: `barbarossaChannel20`,
                },
                {
                  label: `Channel 21`,
                  value: `barbarossaChannel21`,
                },
                {
                  label: `Channel 22`,
                  value: `barbarossaChannel22`,
                },
                {
                  label: `Channel 23`,
                  value: `barbarossaChannel23`,
                },
                {
                  label: `Channel 24`,
                  value: `barbarossaChannel24`,
                },
                {
                  label: `Channel 25`,
                  value: `barbarossaChannel25`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, barbarossaSelector],
          });
        }
        if (bossMenu === "cultonMenu") {
          // Build select menus.
          const cultonSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("cultonTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `cultonChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `cultonChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `cultonChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `cultonChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `cultonChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `cultonChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `cultonChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `cultonChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `cultonChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `cultonChannel10`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, cultonSelector],
          });
        }
        if (bossMenu === "devourerMenu") {
          // Build select menus.
          const devourerSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("devourerTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `devourerChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `devourerChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `devourerChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `devourerChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `devourerChannel5`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, devourerSelector],
          });
        }
        if (bossMenu === "dragonMenu") {
          // Build select menus.
          const dragonSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("dragonTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `dragonChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `dragonChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `dragonChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `dragonChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `dragonChannel5`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, dragonSelector],
          });
        }
        if (bossMenu === "evaMenu") {
          // Build select menus.
          const evaSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("evaTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `evaChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `evaChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `evaChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `evaChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `evaChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `evaChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `evaChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `evaChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `evaChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `evaChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `evaChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `evaChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `evaChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `evaChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `evaChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `evaChannel16`,
                },
                {
                  label: `Channel 17`,
                  value: `evaChannel17`,
                },
                {
                  label: `Channel 18`,
                  value: `evaChannel18`,
                },
                {
                  label: `Channel 19`,
                  value: `evaChannel19`,
                },
                {
                  label: `Channel 20`,
                  value: `evaChannel20`,
                },
              ])
          );
          await channel.send({ components: [lineCooldownButton, evaSelector] });
        }
        if (bossMenu === "frostbotMenu") {
          // Build select menus.
          const frostbotSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("frostbotTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `frostbotChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `frostbotChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `frostbotChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `frostbotChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `frostbotChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `frostbotChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `frostbotChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `frostbotChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `frostbotChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `frostbotChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `frostbotChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `frostbotChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `frostbotChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `frostbotChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `frostbotChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `frostbotChannel16`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, frostbotSelector],
          });
        }
        if (bossMenu === "haboelaMenu") {
          // Build select menus.
          const haboelaSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("haboelaTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `haboelaChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `haboelaChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `haboelaChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `haboelaChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `haboelaChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `haboelaChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `haboelaChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `haboelaChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `haboelaChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `haboelaChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `haboelaChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `haboelaChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `haboelaChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `haboelaChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `haboelaChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `haboelaChannel16`,
                },
                {
                  label: `Channel 17`,
                  value: `haboelaChannel17`,
                },
                {
                  label: `Channel 18`,
                  value: `haboelaChannel18`,
                },
                {
                  label: `Channel 19`,
                  value: `haboelaChannel19`,
                },
                {
                  label: `Channel 20`,
                  value: `haboelaChannel20`,
                },
                {
                  label: `Channel 21`,
                  value: `haboelaChannel21`,
                },
                {
                  label: `Channel 22`,
                  value: `haboelaChannel22`,
                },
                {
                  label: `Channel 23`,
                  value: `haboelaChannel23`,
                },
                {
                  label: `Channel 24`,
                  value: `haboelaChannel24`,
                },
                {
                  label: `Channel 25`,
                  value: `haboelaChannel25`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, haboelaSelector],
          });
        }

        if (bossMenu === "nakyaMenu") {
          // Build select menus.
          const nakyaSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("nakyaTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `nakyaChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `nakyaChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `nakyaChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `nakyaChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `nakyaChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `nakyaChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `nakyaChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `nakyaChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `nakyaChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `nakyaChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `nakyaChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `nakyaChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `nakyaChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `nakyaChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `nakyaChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `nakyaChannel16`,
                },
                {
                  label: `Channel 17`,
                  value: `nakyaChannel17`,
                },
                {
                  label: `Channel 18`,
                  value: `nakyaChannel18`,
                },
                {
                  label: `Channel 19`,
                  value: `nakyaChannel19`,
                },
                {
                  label: `Channel 20`,
                  value: `nakyaChannel20`,
                },
                {
                  label: `Channel 21`,
                  value: `nakyaChannel21`,
                },
                {
                  label: `Channel 22`,
                  value: `nakyaChannel22`,
                },
                {
                  label: `Channel 23`,
                  value: `nakyaChannel23`,
                },
                {
                  label: `Channel 24`,
                  value: `nakyaChannel24`,
                },
                {
                  label: `Channel 25`,
                  value: `nakyaChannel25`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, nakyaSelector],
          });
        }

        if (bossMenu === "harrahMenu") {
          // Build select menus.
          const harrahSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("harrahTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `harrahChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `harrahChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `harrahChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `harrahChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `harrahChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `harrahChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `harrahChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `harrahChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `harrahChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `harrahChannel10`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, harrahSelector],
          });
        }
        if (bossMenu === "luciaMenu") {
          // Build select menus.
          const luciaSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("luciaTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `luciaChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `luciaChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `luciaChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `luciaChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `luciaChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `luciaChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `luciaChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `luciaChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `luciaChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `luciaChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `luciaChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `luciaChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `luciaChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `luciaChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `luciaChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `luciaChannel16`,
                },
                {
                  label: `Channel 17`,
                  value: `luciaChannel17`,
                },
                {
                  label: `Channel 18`,
                  value: `luciaChannel18`,
                },
                {
                  label: `Channel 19`,
                  value: `luciaChannel19`,
                },
                {
                  label: `Channel 20`,
                  value: `luciaChannel20`,
                },
                {
                  label: `Channel 21`,
                  value: `luciaChannel21`,
                },
                {
                  label: `Channel 22`,
                  value: `luciaChannel22`,
                },
                {
                  label: `Channel 23`,
                  value: `luciaChannel23`,
                },
                {
                  label: `Channel 24`,
                  value: `luciaChannel24`,
                },
                {
                  label: `Channel 25`,
                  value: `luciaChannel25`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, luciaSelector],
          });
        }
        if (bossMenu === "magmaMenu") {
          // Build select menus.
          const magmaSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("magmaTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `magmaChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `magmaChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `magmaChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `magmaChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `magmaChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `magmaChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `magmaChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `magmaChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `magmaChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `magmaChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `magmaChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `magmaChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `magmaChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `magmaChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `magmaChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `magmaChannel16`,
                },
                {
                  label: `Channel 17`,
                  value: `magmaChannel17`,
                },
                {
                  label: `Channel 18`,
                  value: `magmaChannel18`,
                },
                {
                  label: `Channel 19`,
                  value: `magmaChannel19`,
                },
                {
                  label: `Channel 20`,
                  value: `magmaChannel20`,
                },
                {
                  label: `Channel 21`,
                  value: `magmaChannel21`,
                },
                {
                  label: `Channel 22`,
                  value: `magmaChannel22`,
                },
                {
                  label: `Channel 23`,
                  value: `magmaChannel23`,
                },
                {
                  label: `Channel 24`,
                  value: `magmaChannel24`,
                },
                {
                  label: `Channel 25`,
                  value: `magmaChannel25`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, magmaSelector],
          });
        }
        if (bossMenu === "robargMenu") {
          // Build select menus.
          const robargSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("robargTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `robargChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `robargChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `robargChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `robargChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `robargChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `robargChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `robargChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `robargChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `robargChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `robargChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `robargChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `robargChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `robargChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `robargChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `robargChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `robargChannel16`,
                },
                {
                  label: `Channel 17`,
                  value: `robargChannel17`,
                },
                {
                  label: `Channel 18`,
                  value: `robargChannel18`,
                },
                {
                  label: `Channel 19`,
                  value: `robargChannel19`,
                },
                {
                  label: `Channel 20`,
                  value: `robargChannel20`,
                },
                {
                  label: `Channel 21`,
                  value: `robargChannel21`,
                },
                {
                  label: `Channel 22`,
                  value: `robargChannel22`,
                },
                {
                  label: `Channel 23`,
                  value: `robargChannel23`,
                },
                {
                  label: `Channel 24`,
                  value: `robargChannel24`,
                },
                {
                  label: `Channel 25`,
                  value: `robargChannel25`,
                },
              ])
          );
          // Send the select menu.
          await channel.send({
            components: [lineCooldownButton, robargSelector],
          });
        }
        if (bossMenu === "rudolphMenu") {
          // Build select menus.
          const rudolphSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("rudolphTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `rudolphChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `rudolphChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `rudolphChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `rudolphChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `rudolphChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `rudolphChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `rudolphChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `rudolphChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `rudolphChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `rudolphChannel10`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, rudolphSelector],
          });
        }
        if (bossMenu === "scyllaMenu") {
          // Build select menus.
          const scyllaSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("scyllaTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `scyllaChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `scyllaChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `scyllaChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `scyllaChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `scyllaChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `scyllaChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `scyllaChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `scyllaChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `scyllaChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `scyllaChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `scyllaChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `scyllaChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `scyllaChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `scyllaChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `scyllaChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `scyllaChannel16`,
                },
                {
                  label: `Channel 17`,
                  value: `scyllaChannel17`,
                },
                {
                  label: `Channel 18`,
                  value: `scyllaChannel18`,
                },
                {
                  label: `Channel 19`,
                  value: `scyllaChannel19`,
                },
                {
                  label: `Channel 20`,
                  value: `scyllaChannel20`,
                },
                {
                  label: `Channel 21`,
                  value: `scyllaChannel21`,
                },
                {
                  label: `Channel 22`,
                  value: `scyllaChannel22`,
                },
                {
                  label: `Channel 23`,
                  value: `scyllaChannel23`,
                },
                {
                  label: `Channel 24`,
                  value: `scyllaChannel24`,
                },
                {
                  label: `Channel 25`,
                  value: `scyllaChannel25`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, scyllaSelector],
          });
        }
        if (bossMenu === "sobekMenu") {
          // Build select menus.
          const sobekSelector = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
              .setCustomId("sobekTimestamp")
              .setPlaceholder("Mark Defeated")
              .addOptions([
                {
                  label: `Channel 1`,
                  value: `sobekChannel1`,
                },
                {
                  label: `Channel 2`,
                  value: `sobekChannel2`,
                },
                {
                  label: `Channel 3`,
                  value: `sobekChannel3`,
                },
                {
                  label: `Channel 4`,
                  value: `sobekChannel4`,
                },
                {
                  label: `Channel 5`,
                  value: `sobekChannel5`,
                },
                {
                  label: `Channel 6`,
                  value: `sobekChannel6`,
                },
                {
                  label: `Channel 7`,
                  value: `sobekChannel7`,
                },
                {
                  label: `Channel 8`,
                  value: `sobekChannel8`,
                },
                {
                  label: `Channel 9`,
                  value: `sobekChannel9`,
                },
                {
                  label: `Channel 10`,
                  value: `sobekChannel10`,
                },
                {
                  label: `Channel 11`,
                  value: `sobekChannel11`,
                },
                {
                  label: `Channel 12`,
                  value: `sobekChannel12`,
                },
                {
                  label: `Channel 13`,
                  value: `sobekChannel13`,
                },
                {
                  label: `Channel 14`,
                  value: `sobekChannel14`,
                },
                {
                  label: `Channel 15`,
                  value: `sobekChannel15`,
                },
                {
                  label: `Channel 16`,
                  value: `sobekChannel16`,
                },
                {
                  label: `Channel 17`,
                  value: `sobekChannel17`,
                },
                {
                  label: `Channel 18`,
                  value: `sobekChannel18`,
                },
                {
                  label: `Channel 19`,
                  value: `sobekChannel19`,
                },
                {
                  label: `Channel 20`,
                  value: `sobekChannel20`,
                },
                {
                  label: `Channel 21`,
                  value: `sobekChannel21`,
                },
                {
                  label: `Channel 22`,
                  value: `sobekChannel22`,
                },
                {
                  label: `Channel 23`,
                  value: `sobekChannel23`,
                },
                {
                  label: `Channel 24`,
                  value: `sobekChannel24`,
                },
                {
                  label: `Channel 25`,
                  value: `sobekChannel25`,
                },
              ])
          );
          await channel.send({
            components: [lineCooldownButton, sobekSelector],
          });
        }
      }
    } catch (error) {
      return console.log(error);
    }
  },
};

const cron = require("node-cron");
const Players = require("../models/players.model");
const { getLivePlayers } = require("../services/sportmonks.service");
//cron.schedule("*/30 * * * * *", 
(async () => {
  try {
    console.log("Fetching live players...");

    const players = await getLivePlayers();

    for (const player of players) {
        const batsman_team = await User.findOne({ sportmonkId: player }).select('_id');
      await player.findOneAndUpdate(
        { sportmonkId: player.id },
        {
          sportsId: "696109aecec65f9a0cd194e6",
          sportmonksId: batsman.id,
          name: batsman.fullname,
          teamId:0,
          country:player.country_id,
          role:""        },
        { upsert: true, new: true }
      );
    }

    console.log(`Synced ${players.length} live player`);
  } catch (err) {
    console.error("Live players sync error:", err.message);
  }
});

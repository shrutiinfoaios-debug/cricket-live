const cron = require("node-cron");
const League = require("../models/leagues.model");
const { getLiveLeagues } = require("../services/sportmonks.service");

//cron.schedule("*/30 * * * * *", async () => {
  try {
    console.log("Fetching live leagues...");

    const leagues = await getLiveLeagues();

    for (const league of leagues) {
      await league.findOneAndUpdate(
        { leagueId: league.id },
        {
          sportsId: "696109aecec65f9a0cd194e6",
          sportmonksId: 1,
          name: league.league.name,
          country:league.league.country_id,
          season:league.league.season_id
        },
        { upsert: true, new: true }
      );
    }

    console.log(`Synced ${leagues.length} live leagues`);
  } catch (err) {
    console.error("Live match sync error:", err.message);
  }
//});

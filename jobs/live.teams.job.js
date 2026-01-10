const cron = require("node-cron");
const Team = require("../models/teams.model");
const { getLiveTeams } = require("../services/sportmonks.service");

//cron.schedule("*/30 * * * * *", async () => {
  try {
    console.log("Fetching live teams...");

    const teams = await getLiveTeams();

    for (const team of teams) {
      await team.findOneAndUpdate(
        { teamId: team.localteam.id },
        {
          sportsId: "696109aecec65f9a0cd194e6",
          sportmonksId: 1,
          name: team.localteam.name,
          shortName: team.localteam.code,
          logo: team.localteam.image_path,
          country:team.localteam.country_id
        },
        { upsert: true, new: true }
      );

      await team.findOneAndUpdate(
        { teamId: team.visitorteam.id },
        {
          sportsId: "696109aecec65f9a0cd194e6",
          sportmonksId: 1,
          name: team.visitorteam.name,
          shortName: team.visitorteam.code,
          logo: team.visitorteam.image_path,
          country:team.visitorteam.country_id
        },
        { upsert: true, new: true }
      );
    }

    console.log(`Synced ${leagues.length} live leagues`);
  } catch (err) {
    console.error("Live match sync error:", err.message);
  }
//});

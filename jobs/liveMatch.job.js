const cron = require("node-cron");
const Match = require("../models/Match");
const { getLiveMatches } = require("../services/sportmonks.service");

cron.schedule("*/30 * * * * *", async () => {
  try {
    console.log("Fetching live matches...");

    const matches = await getLiveMatches();

    for (const match of matches) {
      await Match.findOneAndUpdate(
        { matchId: match.id },
        {
          matchId: match.id,
          league: match.league?.name,
          season: match.season?.name,
          localTeam: match.localteam?.name,
          visitorTeam: match.visitorteam?.name,
          status: match.status,
          runs: match.runs,
          startTime: match.starting_at,
          updatedAt: new Date()
        },
        { upsert: true, new: true }
      );
    }

    console.log(`Synced ${matches.length} live matches`);
  } catch (err) {
    console.error("Live match sync error:", err.message);
  }
});

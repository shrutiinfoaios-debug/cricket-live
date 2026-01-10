const cron = require("node-cron");
const Match = require("../models/match.model");
const { getLiveMatches } = require("../services/sportmonks.service");

//cron.schedule("*/30 * * * * *", async () => {
  try {
    const matches = await getLiveMatches();

    for (const match of matches) {
      await Match.findOneAndUpdate(
        { matchId: match.id },
        {
          sportsId: "696109aecec65f9a0cd194e6",
          sportmonksId: match.id,
          leagueId: match.league?.id,
          homeTeamId: match.localteam?.id,
          awayTeamId: match.visitorTeam?.id,
          visitorTeam: match.visitorteam?.name,
          startTime: match.starting_at,
          status: match.status,
          venue:"stadium",
          result: match.runs,
          lastUpatedAt:match.updatedAt,
          isLive:true
        },
        { upsert: true, new: true }
      );
    }

    console.log(`Synced ${matches.length} live matches`);
  } catch (err) {
    console.error("Live match sync error:", err.message);
  }
//});

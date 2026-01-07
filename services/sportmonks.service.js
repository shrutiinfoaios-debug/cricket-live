const axios = require("axios");

const BASE_URL = "https://cricket.sportmonks.com/v2.0";

async function getLiveMatches() {
  const response = await axios.get(`${BASE_URL}/livescores`, {
    params: {
      api_token: process.env.SPORTMONKS_TOKEN,
      include: "localteam,visitorteam,league,season,stage,venue,runs"
    }
  });

  return response.data.data;
}

module.exports = { getLiveMatches };

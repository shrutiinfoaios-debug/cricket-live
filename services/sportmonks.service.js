const axios = require("axios");

const BASE_URL = "https://cricket.sportmonks.com/api/v2.0";

async function getLiveScores() {
  const response = await axios.get(`${BASE_URL}/livescores`, {
    params: {
      api_token: process.env.SPORTMONKS_TOKEN,
      include: "localteam,visitorteam,league,season,stage,venue,runs"
    }
  });

  return response.data.data;
}

async function getLiveLeagues() {
  const response = await axios.get(`${BASE_URL}/livescores`, {
    params: {
      api_token: process.env.SPORTMONKS_TOKEN,
      include: "league"
    }
  });

  return response.data.data;
}

async function getLiveTeams() {
  const response = await axios.get(`${BASE_URL}/livescores`, {
    params: {
      api_token: process.env.SPORTMONKS_TOKEN,
      include: "localteam,visitorteam,tosswon,winnerteam,lineup"
    }
  });

  return response.data.data;
}

async function getLivePlayers() {
  const response = await axios.get(`${BASE_URL}/livescores`, {
    params: {
      api_token: process.env.SPORTMONKS_TOKEN,
      include: "balls,balls.batsman,balls.bowler"
    }
  });

  return response.data.data;
}

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

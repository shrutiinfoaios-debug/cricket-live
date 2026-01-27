const axios = require("axios");
const BASE_URL = "https://cricket.sportmonks.com/api/v2.0";

module.exports = {
              async  getLiveScores() {
                const response = await axios.get(`${BASE_URL}/livescores`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN,
                    include: "localteam,visitorteam,league,season,stage,venue,runs"
                  }
                });

                return response.data.data;
              },

              async  getLiveLeagues() {
                const response = await axios.get(`${BASE_URL}/livescores`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN,
                    include: "league"
                  }
                });

                return response.data.data;
              },

              async  getLiveTeams() {
                const response = await axios.get(`${BASE_URL}/livescores`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN,
                    include: "localteam,visitorteam,tosswon,winnerteam,lineup"
                  }
                });

                return response.data.data;
              },

              async  getLivePlayers() {
                const response = await axios.get(`${BASE_URL}/livescores`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN,
                    include: "balls,balls.batsman,balls.bowler"
                  }
                });

                return response.data.data;
              },

              async  getLiveMatches() {
                const response = await axios.get(`${BASE_URL}/livescores`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN
                  }
                });

                return response.data.data;
              },

              async  getRawContinents() {
                const response = await axios.get(`${BASE_URL}/continents`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN
                  }
                });
                return response.data.data;
              },

              async  getRawCountries() {
                const response = await axios.get(`${BASE_URL}/countries`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN
                  }
                });

                return response.data.data;
              },

              async getRawLeagues() {
                const response = await axios.get(`${BASE_URL}/leagues`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN
                  }
                });

                return response.data.data;
              },

              async getRawSeasons() {
                const response = await axios.get(`${BASE_URL}/seasons`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN
                  }
                });

                return response.data.data;
              },

              async getRawTeams() {
                const response = await axios.get(`${BASE_URL}/teams`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN
                  }
                });

                return response.data.data;
              },

              async getRawPlayers() {
                const response = await axios.get(`${BASE_URL}/officials`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN
                  }
                });

                return response.data.data;
              },

              async getRawVenues() {
                const response = await axios.get(`${BASE_URL}/venues`, {
                  params: {
                    api_token: process.env.SPORTMONKS_TOKEN
                  }
                });

                return response.data.data;
              }
}

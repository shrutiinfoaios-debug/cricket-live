const express = require("express");
const syncrawdatarouter = express.Router();

const authController = require("../controllers/auth.controller.js");
const { UserDecodeJwt } = require("../controllers/auth.controller.js");
const syncRawData = require("../controllers/syncRawData.controller.js");


/* -------------------------------------------------------------------------- */
/*                               API_KEYS                                  */
/* -------------------------------------------------------------------------- */


syncrawdatarouter.get("/syncRawData/continents", UserDecodeJwt, syncRawData.syncRawContinents);
syncrawdatarouter.get("/syncRawData/countries", UserDecodeJwt, syncRawData.syncRawCountries);
syncrawdatarouter.get("/syncRawData/leagues", UserDecodeJwt, syncRawData.syncRawLeagues);
syncrawdatarouter.get("/syncRawData/seasons", UserDecodeJwt, syncRawData.syncRawSeasons);
syncrawdatarouter.get("/syncRawData/teams", UserDecodeJwt, syncRawData.syncRawTeams);
syncrawdatarouter.get("/syncRawData/players", UserDecodeJwt, syncRawData.syncRawPlayers);
syncrawdatarouter.get("/syncRawData/venues", UserDecodeJwt, syncRawData.syncRawVenues);
syncrawdatarouter.get("/syncRawData/livematches", UserDecodeJwt, syncRawData.syncLiveMatches);

module.exports = syncrawdatarouter;
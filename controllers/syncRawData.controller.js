const sportmonksService = require("../services/sportmonks.service");
const constants = require("../utils/constants");
const RawContinents = require("../models/continents.model");
const RawCountries = require("../models/countries.model");
const RawLeagues = require("../models/leagues.model");
const RawSeasons = require("../models/seasons.model");
const RawTeams = require("../models/teams.model");
const RawPlayers = require("../models/players.model");
const RawVenues = require("../models/venues.model");
const RawLiveMatches = require("../models/matches.model");

exports.syncRawContinents = async (req, res) => {
  try {
    const rawContinents = await sportmonksService.getRawContinents();

    for (const rc of rawContinents) {
      await RawContinents.findOneAndUpdate(
        { id: rc.id },
        {
          name: rc.name,
          updated_at:rc.updated_at
        },
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: "Continents updated successfully"});
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.syncRawCountries = async (req, res) => {
  try {
    const rawCountries = await sportmonksService.getRawCountries();

    for (const rc of rawCountries) {
      await RawCountries.findOneAndUpdate(
        { id: rc.id },
        {
          continent_id:rc.continent_id,
          name: rc.name,
          image_path: rc.image_path,
          updated_at:rc.updated_at
        },
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: "Countries updated successfully"});
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.syncRawLeagues = async (req, res) => {
  try {
    const rawLeagues = await sportmonksService.getRawLeagues();

    for (const rl of rawLeagues) {
      await RawLeagues.findOneAndUpdate(
        { id: rl.id },
        {
          season_id:rl.season_id,
          country_id: rl.country_id,
          name: rl.name,
          code:rl.code,
          image_path: rl.image_path,
          type:rl.type,
          updated_at:rl.updated_at
        },
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: "Leagues updated successfully"});
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.syncRawSeasons = async (req, res) => {
  try {
    const rawSeasons = await sportmonksService.getRawSeasons();

    for (const rs of rawSeasons) {
      await RawSeasons.findOneAndUpdate(
        { id: rs.id },
        {
          league_id:rs.league_id,
          name: rs.name,
          code:rs.code,
          updated_at:rs.updated_at
        },
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: "Seasons updated successfully"});
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};


exports.syncRawTeams = async (req, res) => {
  try {
    const rawTeams = await sportmonksService.getRawTeams();

    for (const rt of rawTeams) {
      await RawTeams.findOneAndUpdate(
        { id: rt.id },
        {
          country_id:rt.country_id,
          name: rt.name,
          code: rt.code,
          image_path: rt.image_path,
          national_team: rt.national_team,
          updated_at: rt.updated_at
        },
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: "Teams updated successfully"});
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.syncRawPlayers = async (req, res) => {
  try {
    const rawPlayers = await sportmonksService.getRawPlayers();

    for (const rp of rawPlayers) {
      await RawPlayers.findOneAndUpdate(
        { id: rp.id },
        {
          country_id:rp.country_id,
          fullname: rp.fullname,
          gender:rp.gender,
          updated_at: rp.updated_at
        },
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: "Players updated successfully"});
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.syncRawVenues = async (req, res) => {
  try {
    const rawVenues = await sportmonksService.getRawVenues();

    for (const rv of rawVenues) {
      await RawVenues.findOneAndUpdate(
        { id: rv.id },
        {
          country_id:rv.country_id,
          name: rv.name,
          city:rv.city,
          image_path: rv.image_path,
          floodlight:rv.floodlight,
          capacity:rv.capacity,
          updated_at: rv.updated_at
        },
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: "Venues updated successfully"});
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};


exports.syncLiveMatches = async (req, res) => {
  try {
    const liveMatches = await sportmonksService.getLiveMatches();

    for (const lm of liveMatches) {
      await RawLiveMatches.findOneAndUpdate(
        { id: lm.id },
        {
          league_id: lm.league_id,
          season_id: lm.season_id,
          stage_id: lm.stage_id,
          round: lm.round,
          localteam_id: lm.localteam_id,
          visitorteam_id: lm.visitorteam_id,
          starting_at: lm.starting_at,
          type: lm.type,
          live: lm.live,
          status:lm.status,
          note: lm.note,
          venue_id: lm.venue_id,
          toss_won_team_id: lm.toss_won_team_id,
          winner_team_id: lm.winner_team_id,
          draw_noreqult: lm.draw_noreqult,
          man_of_match_id:lm.man_of_match_id,
          man_of_series_id: lm.man_of_series_id,
          total_overs_played: lm.total_overs_played,
          elected: lm.elected,
          super_over: lm.super_over,
          follow_on: lm.follow_on,  
          updated_at: lm.updated_at
        },
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: "Live Matches updated successfully"});
  } catch (error) {
    res.status(constants.HTTP_500).json({ error: error.message, message: constants.SOMETHING_WENT_WRONG });
  }
};





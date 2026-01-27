const usersService = require("../services/users.service");
const constants = require("../utils/constants");
const Match = require("../models/match.model");
const { getLiveMatches } = require("../services/sportmonks.service");

exports.profile = async (req, res) => {
  try {
    const user = await usersService.getUserProfile(req.body.user_id, req.user);
    if (!user) return res.status(401).json({ message: "Invalid token" });
    res.send(user);
  } catch (error) {
    res.status(constants.HTTP_500).json({ message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.usersList = async (req, res) => {
  try {
    const users = await usersService.getUsersList();
    res.send(users);
  } catch (error) {
    res.status(constants.HTTP_500).json({ message: constants.SOMETHING_WENT_WRONG });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await usersService.updateUser(
      req.params.id,
      req.body,
      req.user._id
    );

    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(constants.HTTP_400).json({ message: e.message });
  }
};

exports.getLiveMatches = async (req, res) => {
  try {
    const matches = await getLiveMatches();
    console.log(matches)
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
  } catch (e) {
    res.status(constants.HTTP_400).json({ message: e.message });
  }
};

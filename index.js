require("dotenv").config();
require("./db");
require("./jobs/liveMatch.job");
require("./server");
console.log("Cricket Live Match Service Started");

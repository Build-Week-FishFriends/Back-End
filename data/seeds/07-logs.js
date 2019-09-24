
exports.seed = function(knex) {
  const baitType = ["jig", "live worms", "spinner", "spoon", "plastic bait"]
  const logArray = []
  for (let i = 1; i < 40; i++) {
    for(let j = 1; j < 5; j++) {
      logArray.push({baitType: baitType[j], waterBodyId: i, fishId: 1, userId: j, timeSpent: 2, timeOfDay: "3:00 pm"})
    }
  }

  return knex('logs').insert(logArray);
};

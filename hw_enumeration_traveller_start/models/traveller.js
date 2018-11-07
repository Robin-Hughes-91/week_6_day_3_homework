const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const results = this.journeys.map((journey) => {
    return journey.startLocation;
  });

  return results;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const results = this.journeys.map((journey) => {
    return journey.endLocation;
  });

  return results;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const results = this.journeys.filter(journey => journey.transport === transport);
  return results;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const results = this.journeys.filter(journey => journey.distance >= minDistance);
  return results;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
const results = this.journeys.reduce((accumulator, journey) => accumulator + journey.distance
,0);

return results;

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const results = this.journeys.map(item => item.transport)
    .filter((value, index, self) => self.indexOf(value) === index)
    return results;

};
  // const results = [...new Set(this.journeys.map(item => item.transport))];
  // return results;

module.exports = Traveller;

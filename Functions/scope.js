//Blocks and Scope
const city = "New York City";
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline());

//-----------------------------
// Global Scope
const satellite_1 = "The Moon";
const galaxy_1 = "The Milky Way";
const stars_1 = "North Star";

function callMyNightSky() {
  return "Night Sky: " + satellite_1 + ", " + stars_1 + ", and " + galaxy_1;
}

console.log(callMyNightSky());

//-----------------------------
//Block Scope

const lightWaves = "Test";

function lVisibleLightWaves() {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}
console.log(lightWaves);
lVisibleLightWaves();

//----------------------------
//Scope Pollution

const satellite = "The Moon";
const galaxy = "The Milky Way";
let stars = "North Star";

const cMyNightSky = () => {
  stars = "Sirius";
  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};

console.log(cMyNightSky());
console.log(stars);

//----------------------------
//Practice Good Scoping

const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  // Add if statement here:
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

//---------------------------

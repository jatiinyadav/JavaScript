// Write your fasterShip object literal below
let fasterShip = {
  color: "silver",
  "Fuel Type": "Turbo Fuel",
};

//---------------
//Accessing Properties

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

// Write your code below
let crewCount = spaceship.numCrew;
console.log(crewCount);

let planetArray = spaceship.flightPath;
console.log(planetArray);

//----------------------
//Bracket Notation

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Write your code below
let isActive = spaceship["Active Mission"];
console.log(spaceship[propName]);

//----------------------
//Property Assignment

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

// Write your code below
spaceship.color = "glorious gold";
spaceship["numEngines"] = 4;

delete spaceship["Secret Mission"];

//-----------------------
//Methods

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();
alienShip.takeOff();

//---------------------
//Nested Objects

let spaceship = {
  passengers = [{name : Js}],
  tele: {
    yearBuilt: 2020,
  }

}

let spaceship = {
  passengers: [{ name: "Java Script" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

let capFave = spaceship.crew.captain["favorite foods"][0];

let firstPassenger = spaceship.passengers[0];

//------------------
//Pass By Reference

let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Write your code below

let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship);

//-------------------
//Looping Through Objects

let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// Write your code below
for (let i in spaceship.crew) {
  console.log(`${i}: ${spaceship.crew[i].name}`);
}

console.log("----------------");

for (let j in spaceship.crew) {
  console.log(`${spaceship.crew[j].name}: ${spaceship.crew[j].degree}`);
}

//-------------------------

let newobject = {
  test1: "Test1",
  test2: "Test2",
  "test 3": "Test3",
};

function changenewobj(obj) {
  return {
    formatOne: `Value of test1 ${obj.test1}`,
    formatTwo: `Value of test2 ${obj.test2}`,
  };
}

let rtrn = changenewobj(newobject);
console.log(rtrn);
console.log(rtrn.formatOne);

// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
    drivers.push("Ralph");
}

function destructivelyPrependDriver(){
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(){
const newDrivers = [...drivers, 'Broom'];
return newDrivers;
}

function prependDriver(){
  const newDrivers = ['Arnold', ...drivers];
  return newDrivers;
}

function removeLastDriver(){
  const newDrivers = drivers.slice(-1);
}
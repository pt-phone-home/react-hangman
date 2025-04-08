export function getFarewellText(chip) {
  const options = [
    `Farewell, ${chip}`,
    `Adios, ${chip}`,
    `Slán, ${chip}`,
    `RIP, ${chip}`,
    `We'll miss you, ${chip}`,
    `Oh no, not ${chip}`,
    `${chip} bites the dust`,
    `Gone but not forgotten, ${chip}`,
    `The end of, ${chip} as we know it`,
    `Off into the sunset, ${chip}`,
    `${chip}, it's been real`,
    `${chip}, your watch has ended`,
    `${chip} has left the building`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

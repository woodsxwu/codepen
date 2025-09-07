const pokes = getPokes();
console.log("Pokes", pokes);

const type = "grass";
const types = ["bug", "poison"];

// Problem 1: Filter by type (at least one type matches)
const answer1 = pokes
  .filter(poke => poke.types.includes(type))
  .map(poke => poke.name);

// Problem 2: Filter by types

// OR: at least one type matches
const answer2Or = pokes
  .filter(poke => types.some(t => poke.types.includes(t)))
  .map(poke => poke.name);

// AND: all types must be present in poke.types
const answer2And = pokes
  .filter(poke => types.every(t => poke.types.includes(t)))
  .map(poke => poke.name);

console.log("Answer 1", answer1);
console.log("Answer 2 (OR)", answer2Or);
console.log("Answer 2 (AND)", answer2And);

// --------------------------------

function getPokes() {
  const elScript = document.querySelector("#pokes");
  const json = elScript.text;
  const data = JSON.parse(json);
  return data;
}

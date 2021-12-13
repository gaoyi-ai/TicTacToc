import { getWinner } from "./engine"
import { copyArray } from "./util"

const forwardStep = (turn, position, map) => {
  const mapCopy = copyArray(map);

  mapCopy[position.row][position.col] = turn;

  return getWinner(mapCopy);
}


export const mediumBot = (possiblePositions, map) => {
  let chosenOption;

  for (const p of possiblePositions) {
    const winner = forwardStep("o", p, map)
    if (winner === "o") {
      // Attack that position
      chosenOption = p;
      break;
    }
  }
  if (!chosenOption) {
    // Defend
    // Check if the opponent WINS if it takes one of the possible Positions
    for (const p of possiblePositions) {
      const winner = forwardStep("x", p, map)
      if (winner === "x") {
        // Defend that position
        chosenOption = p;
        break
      }
    };
  }
  return chosenOption
}

export const easyBot = (possiblePositions) => {
  // choose random
  return possiblePositions[Math.floor(Math.random() * possiblePositions.length)]
}
import playerFunctions from "./player";

export default function gamePlayFunctions(playerBoard, computerBoard) {
  // board gets set up

  const userPlayer = playerFunctions().player(`p`);
  playerBoard.setBoardOwner(userPlayer);
  const compPlayer = playerFunctions().player(`c`);
  computerBoard.setBoardOwner(compPlayer);
  let currentPlayer = userPlayer;

  function computerTurn() {
    const computerGuess = compPlayer.cellChoice(
      playerBoard.cellsNotGuessed()
    )[0];
    const attackOutcome = playerBoard.receiveAttack(`c`, computerGuess);

    return { computerGuess, attackOutcome };
  }

  const switchPlayer = () => {
    if (currentPlayer === userPlayer) {
      currentPlayer = compPlayer;
    } else {
      currentPlayer = userPlayer;
      // make the player board available;
    }
    return currentPlayer;
  };

  return { computerTurn, switchPlayer, currentPlayer };
}

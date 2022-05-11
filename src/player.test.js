import { gameBoard } from "./gameBoard";
import playerFunctions from "./player";

describe(`Player Object Tests`, () => {
  test(`computer chooses available cell for turn`, () => {
    const thisGameBoard = gameBoard();
    const player = playerFunctions();
    const cPlayer = player.player(`c`);

    const cellsNotGuessed = thisGameBoard.cellsNotGuessed();
    const chosenCell = cPlayer.cellChoice(cellsNotGuessed);

    expect(chosenCell[1].guessed).toEqual(false);
  });
});

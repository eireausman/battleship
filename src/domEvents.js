import gamePlayFunctions from "./gameplay";

export default function domSetup(playerBoard, computerBoard) {
  const gamePlay = gamePlayFunctions(playerBoard, computerBoard);

  const gameContainer = document.createElement(`div`);
  gameContainer.classList.add(`gameContainer`);
  document.body.appendChild(gameContainer);

  const playerContainer = document.createElement(`div`);
  playerContainer.classList.add(`playerContainer`);
  gameContainer.appendChild(playerContainer);

  const playerTitle = document.createElement(`p`);
  playerTitle.classList.add(`playerTitle`);
  playerTitle.textContent = `Your Grid`;
  playerContainer.appendChild(playerTitle);

  const playerGrid = document.createElement(`div`);
  playerGrid.classList.add(`boardGrid`);
  playerContainer.appendChild(playerGrid);

  const playerBoardGridEntries = Object.entries(playerBoard.boardGrid);
  for (let i = 0; i < playerBoardGridEntries.length; i += 1) {
    const playerCell = document.createElement(`div`);
    playerCell.classList.add(`boardCell`);
    playerCell.setAttribute(`data-cellRef`, `${playerBoardGridEntries[i][0]}`);
    playerGrid.appendChild(playerCell);

    if (playerBoardGridEntries[i][1].ship !== false) {
      playerCell.classList.add(`hasBoat`);
      playerCell.textContent = playerBoardGridEntries[i][1].ship;
    }
  }

  const computerContainer = document.createElement(`div`);
  computerContainer.classList.add(`computerContainer`);
  gameContainer.appendChild(computerContainer);

  const computerTitle = document.createElement(`p`);
  computerTitle.classList.add(`computerTitle`);
  computerTitle.textContent = `Computer Grid`;
  computerContainer.appendChild(computerTitle);

  const computerGrid = document.createElement(`div`);
  computerGrid.classList.add(`boardGrid`);
  computerContainer.appendChild(computerGrid);

  const computerBoardGridEntries = Object.entries(computerBoard.boardGrid);
  for (let i = 0; i < computerBoardGridEntries.length; i += 1) {
    const computerCell = document.createElement(`div`);
    computerCell.classList.add(`boardCell`);
    computerCell.classList.add(`computerBoardCell`);
    computerCell.setAttribute(
      `data-cellRef`,
      `${computerBoardGridEntries[i][0]}`
    );
    computerGrid.appendChild(computerCell);
    // if (computerBoardGridEntries[i][1].ship !== false) {
    //   computerCell.classList.add(`hasBoat`);
    //   computerCell.textContent = playerBoardGridEntries[i][1].ship;
    // }
    computerCell.addEventListener(`click`, (e) => {
      if (gamePlay.currentPlayer.playerType === `p`) {
        const attackOutcome = computerBoard.receiveAttack(
          `p`,
          e.target.dataset.cellref
        );
        AttackOutcomeDomChanges(
          computerCell,
          attackOutcome,
          computerBoard,
          computerGrid
        );

        // trigger computer turn:
        const computerTurnResult = gamePlay.computerTurn();
        const cell = playerGrid.querySelector(
          `div[data-cellref="${computerTurnResult.computerGuess}"]`
        );
        AttackOutcomeDomChanges(
          cell,
          computerTurnResult.attackOutcome,
          playerBoard,
          playerGrid
        );
      }
    });
  }

  const AttackOutcomeDomChanges = (
    Cell,
    attackOutcome,
    attackedBoard,
    domGrid
  ) => {
    if (attackOutcome.result === `cellUnavailable`) {
      alert(
        `This square has already been guessed in a previous turn.  Select another....`
      );
    } else if (attackOutcome.result === `directHit`) {
      Cell.classList.add(`directHit`);
    } else if (attackOutcome.result === `validGuessNoHit`) {
      Cell.classList.add(`guessedNoHit`);
    } else if (attackOutcome.result === `sunk`) {
      console.log(Cell);
      console.log(attackOutcome);
      let cell = ``;
      for (let i = 0; i < attackOutcome.shipLocation.length; i += 1) {
        cell = domGrid.querySelector(
          `div[data-cellref="${attackOutcome.shipLocation[i]}"]`
        );
        console.log(cell);
        cell.classList.add(`shipSunk`);
      }
      const shipsLeftCheck = attackedBoard.allShipsSunkCheck();
      if (shipsLeftCheck.length === 0) {
        let winnerMessage = `You won!  Good work!!`;
        if (attackedBoard.getBoardOwner().playerType === `p`) {
          winnerMessage = `Computer wins.  Better luck next time`;
        }
        console.log(attackedBoard.getBoardOwner());
        alert(winnerMessage);
      }
    }
  };
}

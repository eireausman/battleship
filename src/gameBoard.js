import { newShip, shipAddToStorage, shipObjectFromStorage } from "./objectShip";

const gameBoard = () => {
  const hrefs = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`];
  const vrefs = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`];
  const boardGrid = {};
  for (let h = 0; h < hrefs.length; h += 1) {
    for (let v = 0; v < vrefs.length; v += 1) {
      const boardCell = `${hrefs[h]}${vrefs[v]}`;
      boardGrid[boardCell] = {
        ship: false,
        guessed: false,
      };
    }
  }

  let boardOwner = ``;
  const setBoardOwner = (player) => {
    boardOwner = player;
  };
  const getBoardOwner = (player) => boardOwner;

  // the below should be cleaned up into a single function and ship variables passed in.
  // It works and not changing right now, as likely to never cause a future impact.
  const placePlayerBoardShips = (board) => {
    const pShip2 = newShip(`pShip2`, 2);
    const pShip3a = newShip(`pShip3a`, 3);
    const pShip3b = newShip(`pShip3b`, 3);
    const pShip3c = newShip(`pShip3c`, 3);
    const pShip4a = newShip(`pShip4a`, 4);
    const pShip4b = newShip(`pShip4b`, 4);
    const pShip5 = newShip(`pShip5`, 5);

    board.placeShip(pShip2);
    board.placeShip(pShip3a);
    board.placeShip(pShip3b);
    board.placeShip(pShip3c);
    board.placeShip(pShip4a);
    board.placeShip(pShip4b);
    board.placeShip(pShip5);

    return { pShip2, pShip3a, pShip3b, pShip3c, pShip4a, pShip4b, pShip5 };
  };

  const placeComputerBoardShips = (board) => {
    const cShip2 = newShip(`cShip2`, 2);
    const cShip3a = newShip(`cShip3a`, 3);
    const cShip3b = newShip(`cShip3b`, 3);
    const cShip3c = newShip(`cShip3c`, 3);
    const cShip4a = newShip(`cShip4a`, 4);
    const cShip4b = newShip(`cShip4b`, 4);
    const cShip5 = newShip(`cShip5`, 5);

    board.placeShip(cShip2);
    board.placeShip(cShip3a);
    board.placeShip(cShip3b);
    board.placeShip(cShip3c);
    board.placeShip(cShip4a);
    board.placeShip(cShip4b);
    board.placeShip(cShip5);

    return { cShip2, cShip3a, cShip3b, cShip3c, cShip4a, cShip4b, cShip5 };
  };

  const saveBoardShips = (shipArray) => {
    const values = Object.values(shipArray);
    for (let i = 0; i < Object.keys(shipArray).length; i += 1) {
      shipAddToStorage(values[i]);
    }
  };

  const placeShip = (ship) => {
    let stop = false;
    const cellInfo = () => {
      const entries = Object.entries(boardGrid);
      const availableCells = entries.filter((entry) => entry[1].ship === false);
      const randomCell = parseInt(Math.random() * availableCells.length, 10);
      const vChar = availableCells[randomCell][0].charAt(1);
      const hChar = availableCells[randomCell][0].charAt(0);
      const nextNumberCheck = vrefs.indexOf(vChar); // provides an array index of the grid number
      const nextLetterCheck = hrefs.indexOf(hChar); // provides an array index of the grid letter
      return {
        availableCells,
        randomCell,
        vChar,
        hChar,
        nextNumberCheck,
        nextLetterCheck,
      };
    };

    const shipPosition = [];

    const checkCellStatus = (checkCell, checkType, availableCells) => {
      if (checkType === `placeShipHere`) {
        const isCellAvailable = availableCells.filter(
          (cell) => cell[0] === checkCell
        );
        if (isCellAvailable.length > 0) {
          return true;
        }
        return false;
      }
    };

    const checkHorizontal = () => {
      shipPosition.splice(0, shipPosition.length);
      const celldata = cellInfo();
      for (let h = 0; h < ship.shipLength; h += 1) {
        const checkCell = hrefs[celldata.nextLetterCheck] + celldata.vChar;
        if (
          checkCellStatus(
            checkCell,
            `placeShipHere`,
            celldata.availableCells
          ) === true
        ) {
          shipPosition.push(checkCell);
        } else {
          shipPosition.splice(0, shipPosition.length);
        }
        celldata.nextLetterCheck += 1;
      }
      if (shipPosition.length === ship.shipLength) {
        for (let s = 0; s < shipPosition.length; s += 1) {
          boardGrid[shipPosition[s]].ship = ship.shipID;
        }
        stop = true;
      }
    };
    const checkVertical = () => {
      shipPosition.splice(0, shipPosition.length);
      const celldata = cellInfo();
      for (let v = 0; v < ship.shipLength; v += 1) {
        const checkCell = celldata.hChar + vrefs[celldata.nextNumberCheck];
        if (
          checkCellStatus(
            checkCell,
            `placeShipHere`,
            celldata.availableCells
          ) === true
        ) {
          shipPosition.push(checkCell);
        }
        celldata.nextNumberCheck += 1;
      }
      if (shipPosition.length === ship.shipLength) {
        for (let s = 0; s < shipPosition.length; s += 1) {
          boardGrid[shipPosition[s]].ship = ship.shipID;
        }
        stop = true;
      }
    };

    while (stop === false) {
      const randomAxisDeciderVal = Math.random();
      if (randomAxisDeciderVal > 0.5) {
        checkVertical();
      } else if (randomAxisDeciderVal < 0.5) {
        checkHorizontal();
      }
    }
  };

  const receiveAttack = (player, strikePosition, storeSwitch) => {
    const currentGuessState = boardGrid[strikePosition].guessed;
    const cellContainsShip = boardGrid[strikePosition].ship;
    const attackOutcome = { result: ``, shipLocation: false };

    // position previously guessed.  Protection validation:
    if (currentGuessState === `p` || currentGuessState === `c`) {
      attackOutcome.result = `cellUnavailable`;
      return attackOutcome;
    }

    // position contains opponent ship and has not already been guessed
    if (cellContainsShip !== false && currentGuessState === false) {
      // user cannot sink their own ship:
      const shipOwnerValue = cellContainsShip.charAt(0);
      if (player === shipOwnerValue) {
        attackOutcome.result = `ownShip`;
        return attackOutcome;
      }
      boardGrid[strikePosition].guessed = player;
      attackOutcome.result = `directHit`;
      // storeSwitch is for jest test purposes only
      if (storeSwitch !== false) {
        const shipObject = shipObjectFromStorage(cellContainsShip);
        if (shipObject.isHit(strikePosition) === `sunk`) {
          attackOutcome.result = `sunk`;
          attackOutcome.shipLocation = shipObject.whereAmIOnBoard(boardGrid);
        }
      }
      return attackOutcome;
    }
    // position not previously guessed and no ship present:
    if (cellContainsShip === false && currentGuessState === false) {
      boardGrid[strikePosition].guessed = player;
      attackOutcome.result = `validGuessNoHit`;
      return attackOutcome;
    }
  };

  const cellsNotGuessed = () => {
    const entries = Object.entries(boardGrid);
    const entryFreeSpaces = entries.filter(
      (entry) => entry[1].guessed === false
    );
    const freeSpaces = [...entryFreeSpaces];

    return freeSpaces;
  };

  const allShipsSunkCheck = () => {
    const entries = Object.entries(boardGrid);
    const shipCells = [];
    let shipInfo = ``;
    for (let i = 0; i < entries.length; i += 1) {
      shipInfo = ``;
      if (entries[i][1].ship !== false && entries[i][1].guessed === false) {
        shipInfo = {
          cell: entries[i][0],
          ship: entries[i][1].ship,
          guessed: entries[i][1].guessed,
        };

        shipCells.push(shipInfo);
      }
    }
    // shipCells length === 0 would mean all ships are sunk.  returning the array to allow for tests to be completed.
    return shipCells;
  };

  return {
    boardGrid,
    setBoardOwner,
    getBoardOwner,
    placeShip,
    receiveAttack,
    allShipsSunkCheck,
    cellsNotGuessed,
    placeComputerBoardShips,
    placePlayerBoardShips,
    saveBoardShips,
  };
};

export { gameBoard };

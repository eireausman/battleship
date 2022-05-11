import { gameBoard } from "./gameBoard";
import { newShip, shipAddToStorage, shipFromStorage } from "./objectShip";
import playerFunctions from "./player";

const benchmarkBoard = {
  a1: {
    ship: false,
    guessed: false,
  },
  a2: {
    ship: false,
    guessed: false,
  },
  a3: {
    ship: false,
    guessed: false,
  },
  a4: {
    ship: false,
    guessed: false,
  },
  a5: {
    ship: false,
    guessed: false,
  },
  a6: {
    ship: false,
    guessed: false,
  },
  a7: {
    ship: false,
    guessed: false,
  },
  a8: {
    ship: false,
    guessed: false,
  },
  a9: {
    ship: false,
    guessed: false,
  },
  a10: {
    ship: false,
    guessed: false,
  },
  b1: {
    ship: false,
    guessed: false,
  },
  b2: {
    ship: false,
    guessed: false,
  },
  b3: {
    ship: false,
    guessed: false,
  },
  b4: {
    ship: false,
    guessed: false,
  },
  b5: {
    ship: false,
    guessed: false,
  },
  b6: {
    ship: false,
    guessed: false,
  },
  b7: {
    ship: false,
    guessed: false,
  },
  b8: {
    ship: false,
    guessed: false,
  },
  b9: {
    ship: false,
    guessed: false,
  },
  b10: {
    ship: false,
    guessed: false,
  },
  c1: {
    ship: false,
    guessed: false,
  },
  c2: {
    ship: false,
    guessed: false,
  },
  c3: {
    ship: false,
    guessed: false,
  },
  c4: {
    ship: false,
    guessed: false,
  },
  c5: {
    ship: false,
    guessed: false,
  },
  c6: {
    ship: false,
    guessed: false,
  },
  c7: {
    ship: false,
    guessed: false,
  },
  c8: {
    ship: false,
    guessed: false,
  },
  c9: {
    ship: false,
    guessed: false,
  },
  c10: {
    ship: false,
    guessed: false,
  },
  d1: {
    ship: false,
    guessed: false,
  },
  d2: {
    ship: false,
    guessed: false,
  },
  d3: {
    ship: false,
    guessed: false,
  },
  d4: {
    ship: false,
    guessed: false,
  },
  d5: {
    ship: false,
    guessed: false,
  },
  d6: {
    ship: false,
    guessed: false,
  },
  d7: {
    ship: false,
    guessed: false,
  },
  d8: {
    ship: false,
    guessed: false,
  },
  d9: {
    ship: false,
    guessed: false,
  },
  d10: {
    ship: false,
    guessed: false,
  },
  e1: {
    ship: false,
    guessed: false,
  },
  e2: {
    ship: false,
    guessed: false,
  },
  e3: {
    ship: false,
    guessed: false,
  },
  e4: {
    ship: false,
    guessed: false,
  },
  e5: {
    ship: false,
    guessed: false,
  },
  e6: {
    ship: false,
    guessed: false,
  },
  e7: {
    ship: false,
    guessed: false,
  },
  e8: {
    ship: false,
    guessed: false,
  },
  e9: {
    ship: false,
    guessed: false,
  },
  e10: {
    ship: false,
    guessed: false,
  },
  f1: {
    ship: false,
    guessed: false,
  },
  f2: {
    ship: false,
    guessed: false,
  },
  f3: {
    ship: false,
    guessed: false,
  },
  f4: {
    ship: false,
    guessed: false,
  },
  f5: {
    ship: false,
    guessed: false,
  },
  f6: {
    ship: false,
    guessed: false,
  },
  f7: {
    ship: false,
    guessed: false,
  },
  f8: {
    ship: false,
    guessed: false,
  },
  f9: {
    ship: false,
    guessed: false,
  },
  f10: {
    ship: false,
    guessed: false,
  },
  g1: {
    ship: false,
    guessed: false,
  },
  g2: {
    ship: false,
    guessed: false,
  },
  g3: {
    ship: false,
    guessed: false,
  },
  g4: {
    ship: false,
    guessed: false,
  },
  g5: {
    ship: false,
    guessed: false,
  },
  g6: {
    ship: false,
    guessed: false,
  },
  g7: {
    ship: false,
    guessed: false,
  },
  g8: {
    ship: false,
    guessed: false,
  },
  g9: {
    ship: false,
    guessed: false,
  },
  g10: {
    ship: false,
    guessed: false,
  },
  h1: {
    ship: false,
    guessed: false,
  },
  h2: {
    ship: false,
    guessed: false,
  },
  h3: {
    ship: false,
    guessed: false,
  },
  h4: {
    ship: false,
    guessed: false,
  },
  h5: {
    ship: false,
    guessed: false,
  },
  h6: {
    ship: false,
    guessed: false,
  },
  h7: {
    ship: false,
    guessed: false,
  },
  h8: {
    ship: false,
    guessed: false,
  },
  h9: {
    ship: false,
    guessed: false,
  },
  h10: {
    ship: false,
    guessed: false,
  },
  i1: {
    ship: false,
    guessed: false,
  },
  i2: {
    ship: false,
    guessed: false,
  },
  i3: {
    ship: false,
    guessed: false,
  },
  i4: {
    ship: false,
    guessed: false,
  },
  i5: {
    ship: false,
    guessed: false,
  },
  i6: {
    ship: false,
    guessed: false,
  },
  i7: {
    ship: false,
    guessed: false,
  },
  i8: {
    ship: false,
    guessed: false,
  },
  i9: {
    ship: false,
    guessed: false,
  },
  i10: {
    ship: false,
    guessed: false,
  },
  j1: {
    ship: false,
    guessed: false,
  },
  j2: {
    ship: false,
    guessed: false,
  },
  j3: {
    ship: false,
    guessed: false,
  },
  j4: {
    ship: false,
    guessed: false,
  },
  j5: {
    ship: false,
    guessed: false,
  },
  j6: {
    ship: false,
    guessed: false,
  },
  j7: {
    ship: false,
    guessed: false,
  },
  j8: {
    ship: false,
    guessed: false,
  },
  j9: {
    ship: false,
    guessed: false,
  },
  j10: {
    ship: false,
    guessed: false,
  },
};

const thisGameBoard = gameBoard();
const board = thisGameBoard.boardGrid;
const pShips = thisGameBoard.placePlayerBoardShips(thisGameBoard);

describe(`Game Setup Tests`, () => {
  test(`gameboard set up correctly`, () => {
    const testBoard = gameBoard().boardGrid;
    expect(testBoard).toEqual(benchmarkBoard);
  });

  test(`all Player ships are placed on the board and in unique positions`, () => {
    // find all board entries containing ships
    const entries = Object.entries(board);
    const boardCellsContainingShips = entries.filter(
      (entry) => entry[1].ship !== false
    );
    // create an array only containing cell references
    const boardCellsContainingShipsArray = [];
    for (let i = 0; i < boardCellsContainingShips.length; i += 1) {
      boardCellsContainingShipsArray.push(boardCellsContainingShips[i][0]);
    }
    // create a set containing unique values of the above array.  It should contain the same grid
    // refs as no ships should be placed over another ship's cell
    const uniqueCompareSet = new Set();
    for (let i = 0; i < boardCellsContainingShipsArray.length; i += 1) {
      uniqueCompareSet.add(boardCellsContainingShipsArray[i]);
    }

    expect(boardCellsContainingShipsArray.length).toEqual(
      uniqueCompareSet.size
    );
    expect(boardCellsContainingShipsArray.length).toBe(24);
  });
});

test(`non-guessed spaces returned as expected`, () => {
  const cellsNotGuessed = thisGameBoard.cellsNotGuessed();

  const notGuessedArray = [];
  for (let i = 0; i < cellsNotGuessed.length; i += 1) {
    if (cellsNotGuessed[i].guessed !== false) {
      notGuessedArray.push(cellsNotGuessed[i]);
    }
  }
  expect(notGuessedArray).toEqual(cellsNotGuessed);
});

describe(`Game Board - Play Tests`, () => {
  test(`board ownership is assigned correctly`, () => {
    const player = playerFunctions();
    const cPlayer = player.player(`c`);
    thisGameBoard.setBoardOwner(cPlayer);

    expect(thisGameBoard.getBoardOwner()).toEqual(cPlayer);
  });
  test(`guess = MISS and guess recorded correctly on board`, () => {
    const cella1Before = board.a1.ship;
    const cella1GuessedBefore = board.a1.guessed;
    board.a1.ship = false;
    board.a1.guessed = false;

    // returned result should have been a non-hit.  I.e. false
    expect(thisGameBoard.receiveAttack(`p`, `a1`, false).result).toBe(
      `validGuessNoHit`
    );
    // board guess should have been recorded against player: `p`
    expect(board.a1.guessed).toBe(`p`);

    board.a1.ship = cella1Before;
    board.a1.guessed = cella1GuessedBefore;
  });
  test(`guess = HIT and guess recorded correctly on board`, () => {
    const cella1Before = board.a1.ship;
    const cella1GuessedBefore = board.a1.guessed;
    board.a1.ship = `cShip2`;
    board.a1.guessed = false;

    expect(thisGameBoard.receiveAttack(`p`, `a1`, false).result).toBe(
      `directHit`
    );
    expect(board.a1.guessed).toBe(`p`);

    board.a1.ship = cella1Before;
    board.a1.guessed = cella1GuessedBefore;
  });
  test(`guess = User guesses own ship position`, () => {
    const cella1Before = board.a1.ship;
    const cella1GuessedBefore = board.a1.guessed;
    board.a1.ship = `pShip2`;
    board.a1.guessed = false;

    expect(thisGameBoard.receiveAttack(`p`, `a1`, false).result).toEqual(
      `ownShip`
    );
    expect(board.a1.guessed).toBe(false);

    board.a1.ship = cella1Before;
    board.a1.guessed = cella1GuessedBefore;
    expect(board.a1.ship).toEqual(cella1Before);
    expect(board.a1.guessed).toEqual(cella1GuessedBefore);
  });
  test(`guess = position previously guessed`, () => {
    const cella1Before = board.a1.ship;
    const cella1GuessedBefore = board.a1.guessed;
    board.a1.ship = `pShip2`;
    board.a1.guessed = `p`;

    expect(thisGameBoard.receiveAttack(`p`, `a1`, false).result).toEqual(
      `cellUnavailable`
    );
    expect(board.a1.guessed).toBe(`p`);

    board.a1.ship = cella1Before;
    board.a1.guessed = cella1GuessedBefore;
    expect(board.a1.ship).toEqual(cella1Before);
    expect(board.a1.guessed).toEqual(cella1GuessedBefore);
  });
  test(`all ships on board are sunk`, () => {
    // set up the board to have sunk ships:
    const preTestShipCells = thisGameBoard.allShipsSunkCheck();
    const preTestBoard = thisGameBoard.boardGrid;
    for (let i = 0; i < preTestShipCells.length; i += 1) {
      thisGameBoard.boardGrid[preTestShipCells[i].cell].guessed = `p`;
    }
    // an empty array should be returned confirming all ships have been guessed, thus all sunk:
    expect(thisGameBoard.allShipsSunkCheck()).toEqual([]);
    // // reset the board:
    for (let i = 0; i < preTestShipCells.length; i += 1) {
      thisGameBoard.boardGrid[preTestShipCells[i].cell].guessed =
        preTestShipCells[i].guessed;
    }
    const postTestBoard = thisGameBoard.boardGrid;
    // double check the resetting of the board has been successful
    expect(preTestBoard).toEqual(postTestBoard);
  });
});

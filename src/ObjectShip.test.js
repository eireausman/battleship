import { gameBoard } from "./gameBoard";
import { newShip, shipAddToStorage, shipFromStorage } from "./objectShip";

const thisGameBoard = gameBoard();
const board = thisGameBoard.boardGrid;
const pShips = thisGameBoard.placePlayerBoardShips(thisGameBoard);

describe(`Ship Object - Hit and Sink Tests`, () => {
  test(`ship records a first hit correctly`, () => {
    const cella1Before = board.a1.ship;
    const cella2Before = board.a2.ship;

    board.a1.ship = `pShip2`;
    board.a2.ship = `pShip2`;

    const hitCheck = pShips.pShip2.isHit(`a1`, false);
    const testHitArray = pShips.pShip2.hitArray;

    expect(hitCheck).toBe(`hitOnly`);
    expect(testHitArray).toEqual([`a1`]);

    // reset the cell values for future tests and test the rest
    board.a1.ship = cella1Before;
    board.a2.ship = cella2Before;
    pShips.pShip2.hitArray.splice(0, pShips.pShip2.hitArray.length);
    expect(pShips.pShip2.hitArray).toEqual([]);
    expect(board.a1.ship).toEqual(cella1Before);
    expect(board.a2.ship).toEqual(cella2Before);
  });

  test(`ship records a hit correctly after already being hit`, () => {
    const cella1Before = board.a1.ship;
    const cella2Before = board.a2.ship;

    board.a1.ship = `pShip2`;
    board.a2.ship = `pShip2`;

    // record a fist hit to allow for the test to commence:
    pShips.pShip2.isHit(`a1`, false);

    expect(pShips.pShip2.isHit(`a2`, false)).toBe(`sunk`);
    expect(pShips.pShip2.hitArray).toEqual([`a1`, `a2`]);

    // reset the cell values for future tests and test result
    board.a1.ship = cella1Before;
    board.a2.ship = cella2Before;
    pShips.pShip2.hitArray.splice(0, pShips.pShip2.hitArray.length);
    expect(pShips.pShip2.hitArray).toEqual([]);
    expect(board.a1.ship).toEqual(cella1Before);
    expect(board.a2.ship).toEqual(cella2Before);
  });

  test(`Sunk check: ship not sunk`, () => {
    const cellc1Before = board.c1.ship;
    const cellc2Before = board.c2.ship;
    const cellc3Before = board.c3.ship;

    board.c1.ship = `pShip3a`;
    board.c2.ship = `pShip3a`;
    board.c3.ship = `pShip3a`;

    expect(pShips.pShip3a.isHit(`c1`, false)).toBe(`hitOnly`);
    expect(pShips.pShip3a.isHit(`c3`, false)).toBe(`hitOnly`);

    // reset the cell values for future tests
    board.c1.ship = cellc1Before;
    board.c2.ship = cellc2Before;
    board.c3.ship = cellc3Before;
    pShips.pShip3a.hitArray.splice(0, pShips.pShip3a.hitArray.length);
    expect(pShips.pShip3a.hitArray).toEqual([]);
    expect(board.c1.ship).toEqual(cellc1Before);
    expect(board.c2.ship).toEqual(cellc2Before);
    expect(board.c3.ship).toEqual(cellc3Before);
  });

  test(`Sunk check: ship is sunk`, () => {
    const cellc1Before = board.c1.ship;
    const cellc2Before = board.c2.ship;
    const cellc3Before = board.c3.ship;

    board.c1.ship = `pShip3a`;
    board.c2.ship = `pShip3a`;
    board.c3.ship = `pShip3a`;

    expect(pShips.pShip3a.isHit(`c1`, false)).toBe(`hitOnly`);
    expect(pShips.pShip3a.isHit(`c3`, false)).toBe(`hitOnly`);
    expect(pShips.pShip3a.isHit(`c2`, false)).toBe(`sunk`);

    // reset the cell values for future tests
    board.c1.ship = cellc1Before;
    board.c2.ship = cellc2Before;
    board.c3.ship = cellc3Before;
    pShips.pShip3a.hitArray.splice(0, pShips.pShip3a.hitArray.length);
    expect(pShips.pShip3a.hitArray).toEqual([]);
    expect(board.c1.ship).toEqual(cellc1Before);
    expect(board.c2.ship).toEqual(cellc2Before);
    expect(board.c3.ship).toEqual(cellc3Before);
  });
  test(`Ship locates itself coorectly on board`, () => {
    const locationBoard = gameBoard();

    locationBoard.boardGrid.c1.ship = `pShip3a`;
    locationBoard.boardGrid.c2.ship = `pShip3a`;
    locationBoard.boardGrid.c3.ship = `pShip3a`;

    expect(pShips.pShip3a.whereAmIOnBoard(locationBoard.boardGrid)).toEqual([
      `c1`,
      `c2`,
      `c3`,
    ]);
  });
});

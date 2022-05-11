const newShip = (shipID, shipLength, hitArray) => {
  if (hitArray === undefined) {
    hitArray = [];
  } else {
    hitArray = hitArray;
  }
  const ship = {
    shipID,
    shipLength,
    hitArray,
    isHit(strikePosition, storeSwitch) {
      hitArray.push(strikePosition);
      // storeSwitch is for jest test purposes only
      if (storeSwitch !== false) {
        shipAddToStorage(this);
      }
      if (this.isSunk() === true) {
        return `sunk`;
      }
      return `hitOnly`;
    },
    isSunk() {
      if (this.shipLength === this.hitArray.length) {
        return true;
      }
    },
    whereAmIOnBoard(board) {
      const locationArray = [];
      const requestedBoard = Object.entries(board);
      const shipCells = requestedBoard.filter(
        (cell) => cell[1].ship === this.shipID
      );
      for (let i = 0; i < shipCells.length; i += 1) {
        locationArray.push(shipCells[i][0]);
      }
      return locationArray;
    },
  };
  return ship;
};

const shipObjectFromStorage = (shipName) => {
  const shipInfo = localStorage.getItem(shipName);
  const shipDetail = JSON.parse(shipInfo);
  const shipObject = newShip(
    shipDetail.shipID,
    shipDetail.shipLength,
    shipDetail.hitArray
  );
  return shipObject;
};

const shipAddToStorage = (shipObject) => {
  const string = JSON.stringify(shipObject);
  localStorage.setItem(shipObject.shipID, string);
};

export { newShip, shipAddToStorage, shipObjectFromStorage };

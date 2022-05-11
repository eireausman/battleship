export default function playerFunctions() {
  // type is user (p) or compluter (c)
  const player = (type) => {
    const playerObject = {
      playerType: type,
      cellChoice(availableCells) {
        const randomIndex = parseInt(Math.random() * availableCells.length);
        const chosenCell = availableCells[randomIndex];
        return chosenCell;
      },
    };
    return playerObject;
  };
  return { player };
}

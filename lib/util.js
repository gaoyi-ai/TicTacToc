export const copyArray = (original) => {
  return original.map(arr => arr.slice());
};

export const getPossiblePositions = (map) => {
  const pos = [];
  map.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === "") {
        pos.push({ row: rowIndex, col: columnIndex });
      }
    });
  });
  return pos
}
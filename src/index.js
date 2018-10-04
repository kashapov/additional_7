module.exports = function solveSudoku(matrix) {
  
  let result;
  let resMatrix = [...matrix];

  function checkZero(resMatrix) {
    for (let i = 0; i < resMatrix.length; i++) {
      for (let j = 0; j < resMatrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          resMatrix[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
      }
    }

    return resMatrix;
  }


  result = checkZero(resMatrix);
 
  //console.log(matrix);
  //console.log(resMatrix);

  return result;
}

module.exports = function solveSudoku(matrix) {
  
  var resMatrix = matrix;

  function checkZero(resMatrix) {
    for (var i = 0; i < resMatrix.length; i++) {
      for (var j = 0; j < resMatrix[i].length; j++) {
        if (matrix[i][j] == 0) {
          resMatrix[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
      }
    }

    return resMatrix;
  }


  resMatrix = checkZero(resMatrix);
 
  //console.log(matrix);
  //console.log(resMatrix);

  return resMatrix;
}

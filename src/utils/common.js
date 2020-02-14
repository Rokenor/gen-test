/**
 * Email validation
 * 
 * @param {string} email
 * @returns {boolean} 
 */
export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Generate 2d array for grid visualization and return 2 arrays of row and cols names
 * 
 * @param {Object} data 
 * @returns {Array} gridData
 * @returns {Array} columnsTitles
 * @returns {Array} rowsTitles
 */
export function setGrid(data) {
  let gridData = [],
    columnsTitles = [],
    rowsTitles = [];

  if (Object.keys(data).length > 0) {
    columnsTitles = data.columns;
    rowsTitles = data.rows;

    let cols = data.columns.length,
      rows = data.rows.length;

    for (let i = 0; i < rows; i++) {
      gridData[i] = [];
      for (let j = 0; j < cols; j++) {
        // genereating grid
        gridData[i][j] = {
          col: data.columns[j],
          row: data.rows[i]
        }
        // adding existing data to grid cells
        data.cell.map((cell, index) => {
          if (cell.coords.column === gridData[i][j].col && cell.coords.row === gridData[i][j].row) {
            gridData[i][j] = {
              ...gridData[i][j],
              cellId: cell.id,
              text: cell.text,
              image: cell.image
            }
          }
        })
      }
      // check row for filled cells
      let counterFilledCells = 0;
      gridData[i].map((cell, cellIndex) => {
        if(cell.cellId) {
          counterFilledCells++;
        }
      })
      if (counterFilledCells === 0) {
        gridData.splice(i, 1);
      }
    }
  }
  
  return { gridData , columnsTitles, rowsTitles };
};

/**
 * Create 2 arrays for column group and titles
 * 
 * @param {Array} [columnsTitles]
 * @returns {Array} groups
 * @returns {Array} titles
 */
export function setTitles(columnsTitles) {
  let groups = []
  let titles = [];

  columnsTitles.map((name, index) => {
    titles.push(name.split(' / ')[0]);
    groups.push(name.split(' / ')[1]);
  })

  return { groups, titles };
}
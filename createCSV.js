let fs = require('fs')
const { convertArrayToCSV } = require('convert-array-to-csv');

const header = [['Invoice Number', 'Flight Dates', 'PDF Filename']]

function createCSV(data){
  const csvFromArrayOfArrays = convertArrayToCSV(data, {
    header,
    separator: ','
  })

  fs.writeFile('./csv/csvResult.csv', csvFromArrayOfArrays, (err) => {
    if (err) throw err;
    console.log('Saved')
  })
}

module.exports = createCSV

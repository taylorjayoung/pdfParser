let fs = require('fs')
const findData = require('./findData.js')
const util = require('util')
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
let parsePdf = require('./parsePdf.js')

//run function that iterates through pdf folder
 
// fs.readdir('./pdfs', function(err, items) {
//   for (var i=0; i<items.length; i++) {
//     //create json for each pdf
//     const jsonExt = items[i].slice(0,-4)
//     parsePdf.execute(jsonExt)
//   }
// });



// create array of info 
const header = [['Invoice Number', 'Flight Dates']]
let csvData = []

// read json directory
fs.readdir('./json', function(err, items) {
  
  //iterate through each json file
  for (var i=2000; i < items.length; i++) {
    const json = require(`./json/${items[i]}`)
    var body = json["formImage"]["Pages"][0]["Texts"]
    const record = findData.getInvNumAndDates(body, i)
    console.log('Line 33, record: ', record)
    console.log(csvData)
    csvData.push(record)
  }
  createCSV(csvData)
})



function createCSV(data){
  const csvFromArrayOfArrays = convertArrayToCSV(data, {
    header,
    separator: ','
  });


  fs.writeFile('./csv/csvResult.csv', csvFromArrayOfArrays, (err) => {
    if (err) throw err; 
    console.log('Saved')
  })
}
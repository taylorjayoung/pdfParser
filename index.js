let fs = require('fs')
const parsePdf = require('./parsePdf')
const json = require('./json/output.json')
const findData = require('./findData.js')
const util = require('util')


//run function that iterates through pdf folder
 
fs.readdir('./pdfs', function(err, items) {
  for (var i=0; i<items.length; i++) {
    //create json for each pdf
    console.log(items[i])
    parsePdf.execute(items[i])
    //iterate through each json file

  }
});





// var body = json["formImage"]["Pages"][0]["Texts"]

// var records = [['Invoice Number', 'Flight Dates']]

// const record = findData.getInvNumAndDates(body)


// console.log(record)



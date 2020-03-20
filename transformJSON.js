let fs = require('fs')
const createCSV = require('./createCSV')
const findData = require('./findData.js')



function transformJSON(){
  const csvData = []
  fs.readdir('./json', function(err, items) {
    // iterate through each json file
    for (var i=0; i < items.length; i++) {
      const json = require(`./json/${items[i]}`)
      var body = json["formImage"]["Pages"][0]["Texts"]
      const record = findData.getInvNumAndDates(body, i, items[i])
      // console.log('Line 33, record: ', record)

      csvData.push(record)
    }

    console.log('csv data length',csvData.length)

    createCSV(csvData)
  })
}

transformJSON()

let fs = require('fs')
PDFParser = require("pdf2json");


function parsePDF(fileExt){
  let pdfParser = new PDFParser();
  let filename = `./pdfs/${fileExt}`
console.log(filename)
  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
  pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile(`/json/${fileExt}`, JSON.stringify(pdfData), function(err, result) {
      if(err) console.log('error', err);
    });
  });
}


// pdfParser.loadPDF("./pdfs/gray-pdf-1.pdf");
module.exports = {
  execute: parsePDF
}
let fs = require('fs')
PDFParser = require("pdf2json");


function parsePDF(fileExt){
  let pdfParser = new PDFParser();
  let filename = `./pdfs/${fileExt}.pdf`
console.log(fileExt)
  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
  pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile(`./json/${fileExt}.json`, JSON.stringify(pdfData), function(err, result) {
      if(err) console.log('error', err);
    });
  });
  pdfParser.loadPDF(filename);

}


module.exports = {
  execute: parsePDF
}
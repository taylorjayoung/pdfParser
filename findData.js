


module.exports = {
  getInvNumAndDates: getInvNumAndDates
  
}

function getInvNumAndDates (body){
    let dates
    let inNum
    
    if(!body) return

    for(let i = 0; i < 22; i++){
      if(body[i]["R"][0]["T"].includes('Invoice%23')){}

      if(i === 18){
        //invoice number
        inNum = body[i]["R"][0]["T"]
      }
      if(i === 21){
        //flight dates
        dates = body[i]["R"][0]["T"]
      }
  
    }
    return {inNum: inNum, dates: dates}
    // console.log(util.inspect(json["formImage"]["Pages"][0]["Texts"], {showHidden: false, depth: null})) (body){
  let flightDates
  let invNum
  
  if(!body) return

  for(let i = 0; i < 22; i++){
    if(body[i]["R"][0]["T"].includes('Invoice%23')){}

    if(i === 18){
      //invoice number
      invNum = body[i]["R"][0]["T"]
    }
    if(i === 21){
      //flight dates
      flightDates = body[i]["R"][0]["T"]
    }

  }
  return {invNum: invNum, flightDates: flightDates}
  // console.log(util.inspect(json["formImage"]["Pages"][0]["Texts"], {showHidden: false, depth: null}))
}



module.exports = {
  getInvNumAndDates: getInvNumAndDates
  
}

function getInvNumAndDates (body, i){
    let dates
    let inNum
    
    if(!body) return ['error', i]

    //find "Invoice #"
    let invIdx = body.findIndex( obj => obj["R"][0]["T"] === 'Invoice%23')
    let adjInvIdx = invIdx + 4
    invIdx = body[adjInvIdx]["R"][0]["T"]

    //find Flight
    let flightIdx = body.findIndex( obj => obj["R"][0]["T"] === 'Flight' )
    let adjFlightIdx = flightIdx + 4
    flightIdx = body[adjFlightIdx]["R"][0]["T"]


    //RegEx invoice and flights 
    //Error check
    console.log(invIdx, flightIdx)
    return [invIdx, flightIdx]
    // console.log(util.inspect(json["formImage"]["Pages"][0]["Texts"], {showHidden: false, depth: null})) (body){

}

export default class CardData{
 
 getInfo(result) {
  return fetch (`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${result}`)
        .then(res=> res = {
             "bin": "515735",
             "bank": "CITIBANK N.A.",
             "card": "MASTERCARD",
             "type": "CREDIT",
             "level": "WORLD",
             "country": "UNITED STATES",
             "countrycode": "US",
             "website": "",
             "phone": "",
             "valid": "true"
          }
        )
 }
}




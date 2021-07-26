import importData from "./ImportData";

const combinedData = async () => {
  const companyData = await importData("/companies")
  const companyArray = await companyData.companies
  
  const scoreData = await importData("/scores")
  const scoreArray = await scoreData.scores

  const resultsArray = []

  if (companyArray.length !== 0 && scoreArray.length !== 0) {
    for (const companyElement of companyArray) {
      for (const scoreElement of scoreArray) {
        if (companyElement.score_id === scoreElement.id) {
          const priceData = await importData(`/prices/${companyElement.id}`)
          const priceArray = await priceData.companyPrices

          let element = {
            id: companyElement.id,
            name: companyElement.name,
            unique_symbol: companyElement.unique_symbol,
            exchange: companyElement.exchange_symbol,
            score: scoreElement.total,
            firstPrice: priceArray[0].price,
            lastPrice: priceArray[priceArray.length - 1].price,
            volatility: parseFloat((priceArray[priceArray.length - 1].price - priceArray[0].price) / priceArray[0].price).toFixed(2) 
          }

          resultsArray.push(element)
        }
      }
    }
  }

  // console.log(resultsArray)
  return resultsArray
}

export default combinedData;
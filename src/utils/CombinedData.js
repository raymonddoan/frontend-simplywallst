import importData from "./ImportData";

const combinedData = async () => {
  const companyData = await importData("/companies").companies
  const scoreData = await importData("/scores").scores

  const resultsArray = []

  if (companyData.length !== 0 && scoreData.length !== 0) {
    for (const companyElement of companyData) {
      for (const scoreElement of scoreData) {
        if (companyElement.score_id === scoreElement.id) {
          let element = {
            id: companyElement.id,
            name: companyElement.name,
            unique_symbol: companyElement.unique_symbol,
            exchange: companyElement.exchange_symbol,
            score: scoreElement.total
          }

          resultsArray.push(element)
        }
      }
    }
  }

  return resultsArray

}

export default combinedData;
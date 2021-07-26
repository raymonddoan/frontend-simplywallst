import CompanyArticle from "./CompanyArticle";

describe('CompanyArticle', () => {
  test('should return null if any of the parameters are missing', () => {
    const missingName = {
      company: {
        id: "46B285BC-B25F-4814-985C-390A4BFA2023",
        unique_symbol: "ASX:APT",
        exchange: "ASX",
        score: 9,
        firstPrice: 15,
        lastPrice: 44.51,
        volatility: 0.04
      }
    }
    expect(CompanyArticle(missingName)).toBeNull();

    const missingScore = {
      company: {
        id: "46B285BC-B25F-4814-985C-390A4BFA2023",
        name: "Afterpay",
        unique_symbol: "ASX:APT",
        exchange: "ASX",
        firstPrice: 15,
        lastPrice: 44.51,
        volatility: 0.04
      }
    }
    expect(CompanyArticle(missingScore)).toBeNull();

  })
})

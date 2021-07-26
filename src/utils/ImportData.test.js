import axios from "axios";
import importData from "./ImportData";

jest.mock('axios')

describe('ImportData', () => {
  xtest("should resolve a promise and return data in the form of an object", async () => {
    const data = {
      companies: [
        {
          "id": "46B285BC-B25F-4814-985C-390A4BFA2023",
          "name": "Afterpay",
          "ticker_symbol": "APT",
          "exchange_symbol": "ASX",
          "unique_symbol": "ASX:APT",
          "date_generated": "2020-05-24 11:01:59.000000",
          "security_name": "Ordinary Shares",
          "exchange_country_iso": "AU",
          "listing_currency_iso": "AUD",
          "canonical_url": "/stocks/au/software/asx-apt/afterpay-shares",
          "unique_symbol_slug": "asx-apt",
          "score_id": 26507
        },
        {
          "id": "4BE2C01F-F390-479C-A166-8E0DD73CF7B9",
          "name": "BHP Group",
          "ticker_symbol": "BHP",
          "exchange_symbol": "ASX",
          "unique_symbol": "ASX:BHP",
          "date_generated": "2020-05-24 10:36:54.000000",
          "security_name": "LTD Ordinary Shares",
          "exchange_country_iso": "AU",
          "listing_currency_iso": "AUD",
          "canonical_url": "/stocks/au/materials/asx-bhp/bhp-group-shares",
          "unique_symbol_slug": "asx-bhp",
          "score_id": 1895
        },
      ]
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(importData("/companies")).resolves.toEqual(data)
    
    // let companyData = await importData("/companies");
    // const companyArray = await companyData.companies

    // expect(companyArray).not.toBeNull();
    // expect(typeof companyArray).toEqual('object');
  });
})

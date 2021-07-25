import SwsApi from "../api/SwsApi";

const companyData = async () => {
  let numOfAttempts = 0
  
  while (numOfAttempts < 2) {
    try {
      const response = await SwsApi.get("/companies");
      const data = await response.data.companies;
      console.log("Company Data is loaded");
      return data;
    } catch (error) {
      if (error) {
        console.log("Retrying to load company data");
        return companyData();        
      }
    }
    numOfAttempts++
  }
};

export default companyData;

import SwsApi from "../api/SwsApi";

const importData = async (path) => {
  let numOfAttempts = 0
  
  while (numOfAttempts < 2) {
    try {
      const response = await SwsApi.get(path);
      const data = await response.data;
      console.log(`${path} Data is loaded`);
      return data;
    } catch (error) {
      if (error) {
        console.log("Retrying to load data");
        return importData();        
      }
    }
    numOfAttempts++
  }
};

export default importData;

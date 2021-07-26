import "./App.css";
import { useEffect, useState } from "react";

import combinedData from "./utils/CombinedData";

import CompaniesContainer from "./components/CompaniesContainer";
import NavBar from "./components/Navbar";

function App() {
  const [companies, setCompanies] = useState(null);
  const [sortedField, setSortedField] = useState(null)

  const getCompaniesData = async () => {
    let companiesArray = await combinedData();
    setCompanies(companiesArray);
  };

  useEffect(() => {
    getCompaniesData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simply Wall St Snowflake Insights</h1>
      </header>
      <NavBar setSortedField={setSortedField}/>
      {companies && <CompaniesContainer companies={companies} sortedField={sortedField} />}
    </div>
  );
}

export default App;

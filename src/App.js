import "./App.css";
import { useEffect, useState } from "react";

import combinedData from "./utils/CombinedData";

import CompaniesContainer from "./components/CompaniesContainer";
import NavBar from "./components/Navbar.jsx";

function App() {
  const [companies, setCompanies] = useState([]);
  
  const [exchange, setExchange] = useState(null)
  const [score, setScore] = useState(null)
  const [sortedField, setSortedField] = useState(null)
  
  const getCompaniesData = async () => {
    let companiesArray = await combinedData();
    setCompanies(companiesArray);
  };

  let sortedFilteredCompanies = [...companies];
  if (exchange !== null && exchange !== "" && score !== null && score !== "") {
    sortedFilteredCompanies = companies.filter((company) => company.exchange == exchange && company.score == score)
  } else if (exchange !== null && exchange !== "") {
    sortedFilteredCompanies = companies.filter((company) => company.exchange == exchange)
  } else if (score !== null && score !== "") {
    sortedFilteredCompanies = companies.filter((company) => company.score == score)
  }

  if (sortedField) {
    sortedFilteredCompanies.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return 1;
      }
      if (a[sortedField] > b[sortedField]) {
        return -1;
      }
      return 0;
    })
  }

  useEffect(() => {
    getCompaniesData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simply Wall St Snowflake Insights</h1>
      </header>
      {companies && <NavBar setSortedField={setSortedField} companies={companies} setExchange={setExchange} setScore={setScore}/>}
      {companies && <CompaniesContainer companies={sortedFilteredCompanies} />}
    </div>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";

import companyData from "./utils/CompanyData";

import CompaniesContainer from "./components/CompaniesContainer";

function App() {
  const [companies, setCompanies] = useState(null);

  const getCompaniesData = async () => {
    let companiesArray = await companyData();
    setCompanies(companiesArray);
  };

  useEffect(() => {
    getCompaniesData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CompaniesContainer companies={companies} />
      </header>
    </div>
  );
}

export default App;

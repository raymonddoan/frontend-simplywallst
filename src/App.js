import './App.css';
import { useEffect, useState } from 'react';

import companyData from "./utils/CompanyData";

function App() {
  const [companies, setCompanies] = useState([])

  const getCompaniesData = async () => {
    let companiesArray = await companyData();
    setCompanies(companiesArray);
  }

  useEffect(() => {
    getCompaniesData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {companies}
        </p>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import CompanyArticle from './CompanyArticle';

const CompaniesContainer = ({companies}) => {
  
  return (
    <div>
      {companies && companies.map(company => 
        <CompanyArticle company={company} key={company.id}/>
      )}
    </div>
  )
}

export default CompaniesContainer;
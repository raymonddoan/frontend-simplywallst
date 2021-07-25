import React from 'react';
import CompanyArticle from './CompanyArticle';

const CompaniesContainer = ({companies}) => {
  
  return (
    <div>
      {companies && companies.map(company => 
        <CompanyArticle company={company} />
      )}
    </div>
  )
}

export default CompaniesContainer;
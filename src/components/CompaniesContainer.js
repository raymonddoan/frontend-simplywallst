import React from 'react';

const CompaniesContainer = ({companies}) => {
  
  return (
    <div>
      {companies && companies.map(company => 
        <p>{company.name}</p>
      )}
    </div>
  )
}

export default CompaniesContainer;
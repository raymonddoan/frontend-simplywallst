import React from 'react';
import styled from "styled-components";
import CompanyArticle from './CompanyArticle';

const StyledCompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`

const CompaniesContainer = ({companies, sortedField}) => {
  let sortedCompanies = [...companies];

  if (sortedField !== null) {
    sortedCompanies.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return 1;
      }
      if (a[sortedField] > b[sortedField]) {
        return -1;
      }
      return 0;
    })
  }


  return (
    <StyledCompaniesContainer>
      {sortedCompanies && sortedCompanies.map(company => 
        <CompanyArticle company={company} key={company.id}/>
      )}
    </StyledCompaniesContainer>
  )
}

export default CompaniesContainer;
import React from 'react';
import styled from "styled-components";
import CompanyArticle from './CompanyArticle';

const StyledCompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`

const CompaniesContainer = ({companies}) => {

  return (
    <StyledCompaniesContainer>
      {companies && companies.map(company => 
        <CompanyArticle company={company} key={company.id}/>
      )}
    </StyledCompaniesContainer>
  )
}

export default CompaniesContainer;
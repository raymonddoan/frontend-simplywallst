import React from 'react';
import styled from "styled-components";

const StyledCompanyArticle = styled.article`
  border: solid 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`

const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-evenly;
  width: 240px;
  padding: 1rem 0;
`

const StyledLeftDiv = styled.div`
  color: ${props => props.color === "stronger" ? "#6ff776" : "#f76f6f"};

  display: flex;
  flex-direction: column;
  width: 100px;
`

const StyledScore = styled.p`
  margin: 0.2rem 0;
`

const StyledRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
`

const StyledTitleDiv = styled.div`
  width: 100%;
  overflow: hidden;
`

const StyledTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 800;
  margin: 0.5rem 0;
  width: max-content;
`

const StyledSymbol = styled.p`
  margin: 0.1rem;
  width: max-content;
`


const CompanyArticle = ({company}) => {
  const {name, unique_symbol, score, firstPrice, lastPrice} = company
  
  if ( !name || !unique_symbol || !score || !firstPrice || !lastPrice) {
    return null
  }

  let volatility = parseFloat((lastPrice - firstPrice) / firstPrice).toFixed(2) 

  return (
    <>
      <StyledCompanyArticle>
        <StyledTextDiv>
          <StyledLeftDiv color={score < 12 ? null : "stronger"}>
            <StyledScore>Overall Snowflake Score:</StyledScore>
            <StyledScore>{score}</StyledScore>
          </StyledLeftDiv>
          <StyledRightDiv>
            <StyledTitleDiv>
              <StyledTitle>{name}</StyledTitle>
            </StyledTitleDiv>
            <StyledSymbol>{unique_symbol}</StyledSymbol>
            <p>{volatility}%</p>
          </StyledRightDiv>
        </StyledTextDiv>
      </StyledCompanyArticle>
    </>
  )
}

export default CompanyArticle;
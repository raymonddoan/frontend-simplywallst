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
  padding: 0.5rem 0;
`

const StyledLeftDiv = styled.div`
  color: ${props => props.color === "higher" ? "#6ff776" : "#f76f6f"};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
`

const StyledScoreTitle = styled.p`
  margin: 0.2rem 0;
  font-size: 1rem;
`

const StyledScore = styled.p`
  margin: 0.2rem 0;
  font-size: 1.4rem;
  font-weight: 800;
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
  margin: 0.2rem 0;
  width: max-content;
  font-size: 0.8rem;
`

const StyledPrice = styled.p`
  margin: 0.5rem 0;
  text-align: left;
  font-weight: 500; 
`

const StyledVolatilty = styled.p`
  color: ${props => props.color === "higher" ? "#6ff776" : "#f76f6f"};

  margin: 0.3rem;
  font-size: 1.3rem;
  font-weight: 800;
  text-align: right;
`

const CompanyArticle = ({company}) => {
  const {name, unique_symbol, score, lastPrice, volatility} = company
  
  if ( !name || !unique_symbol || !score || !lastPrice || !volatility) {
    return null
  }

  return (
    <>
      <StyledCompanyArticle>
        <StyledTextDiv>
          <StyledLeftDiv color={score < 12 ? null : "higher"}>
            <StyledScoreTitle>Overall Snowflake Score:</StyledScoreTitle>
            <StyledScore>{score}</StyledScore>
          </StyledLeftDiv>
          <StyledRightDiv>
            <StyledTitleDiv>
              <StyledTitle>{name}</StyledTitle>
            </StyledTitleDiv>
            <StyledSymbol>{unique_symbol}</StyledSymbol>
            <StyledPrice>${lastPrice.toFixed(2)}</StyledPrice>
            <StyledVolatilty color={volatility < 0 ? null : "higher"}>{volatility}%</StyledVolatilty>
          </StyledRightDiv>
        </StyledTextDiv>
      </StyledCompanyArticle>
    </>
  )
}

export default CompanyArticle;
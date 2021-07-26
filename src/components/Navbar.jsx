import React from 'react';
import DropdownFilter from './DropdownFilter';
import styled from "styled-components";

const StyledNavbar = styled.div`
  padding: 0 2rem;
  background-color: #267491;
  
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 2rem;
  }
`

const StyledSortDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 700px) {
    width: 500px;
  }
`

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  @media (min-width: 700px) {
    width: 150px;
  }
`

const StyledFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 700px) {
    width: 500px;
  }
`

const NavBar = (props) => {
  const {setSortedField, companies, setExchange, setScore} = props

  let exchanges = []
  for (const company of companies) {
    if (!exchanges.includes(company.exchange)) {
      exchanges.push(company.exchange)
    }
  }
  exchanges.unshift("")

  let scores = []
  for (const company of companies) {
    if (!scores.includes(company.score)) {
      scores.push(company.score)
    }
  }
  scores.unshift("")

  return (
    <StyledNavbar>
      <StyledSortDiv>
        <p>Sort by:</p>
        <StyledButtonDiv>
          <button onClick={() => setSortedField("score")}>Score</button>
          <button onClick={() => setSortedField("volatility")}>Volatility</button>
        </StyledButtonDiv>
      </StyledSortDiv>
      <StyledFilterDiv>
        <p>Filter by: </p>
        <DropdownFilter data={exchanges} setValue={setExchange} label="Exchange"/>
        <DropdownFilter data={scores} setValue={setScore} label="Scores"/>
      </StyledFilterDiv>
    </StyledNavbar>
  )
}

export default NavBar;
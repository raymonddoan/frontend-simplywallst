import React from 'react';
import DropdownFilter from './DropdownFilter';
import styled from "styled-components";

const StyledFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
    <>
      <div>
        <p>Sort by:</p>
        <button onClick={() => setSortedField("score")}>Score</button>
        <button onClick={() => setSortedField("volatility")}>Volatility</button>
      </div>
      <StyledFilterDiv>
        <p>Filter by: </p>
        <DropdownFilter data={exchanges} setValue={setExchange} label="Exchange"/>
        <DropdownFilter data={scores} setValue={setScore} label="Scores"/>
      </StyledFilterDiv>
    </>
  )
}

export default NavBar;
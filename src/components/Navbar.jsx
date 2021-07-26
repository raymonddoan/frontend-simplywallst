import React from 'react';
import DropdownFilter from './DropdownFilter';

const NavBar = (props) => {
  const {setSortedField, companies, setExchange, setScore} = props

  return (
    <>
      <div>
        <p>Sort by:</p>
        <button onClick={() => setSortedField("score")}>Score</button>
      </div>
      <DropdownFilter companies={companies} setExchange={setExchange} setScore={setScore}/>
    </>
  )
}

export default NavBar;
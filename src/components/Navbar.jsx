import React from 'react';
import DropdownExchange from './DropdownExchange';

const NavBar = (props) => {
  const {setSortedField, companies, filteredField, setFilteredField} = props


  return (
    <>
      <div>
        <p>Sort by:</p>
        <button onClick={() => setSortedField("score")}>Score</button>
      </div>
      <DropdownExchange companies={companies}/>
    </>
  )
}

export default NavBar;
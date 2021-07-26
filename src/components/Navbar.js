import React from 'react';



const NavBar = ({setSortedField}) => {
  
  return (
    <>
      <div>
        <p>Sort by:</p>
        <button onClick={() => setSortedField("score")}>Score</button>
      </div>
    </>
  )
}

export default NavBar;
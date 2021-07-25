import React from 'react';

const CompanyArticle = ({company}) => {
  const {name, unique_symbol, score} = company
  
  if ( !name || !unique_symbol || !score ) {
    return null
  }

  return (
    <>
      <article>
        <div>
          <h1>{name}</h1>
          <h3>{unique_symbol}</h3>
          <p>Overall Snowflake Score: {score}</p>
        </div>
      </article>
    </>
  )
}

export default CompanyArticle;
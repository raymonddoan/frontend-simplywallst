import React from 'react';

const CompanyArticle = ({company}) => {
  const {name, unique_symbol, score_id} = company
  
  if ( !name || !unique_symbol || score_id ) {
    return null
  }

  return (
    <>
      <article>
        <div>
          <h1>{name}</h1>
          <h2>{unique_symbol}</h2>
        </div>
      </article>
    </>
  )
}

export default CompanyArticle;
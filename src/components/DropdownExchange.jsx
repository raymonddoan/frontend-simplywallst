import React from 'react';

const DropdownExchange = ({companies}) => {
  let exchanges = []
  console.log(companies)
  for (const company of companies) {
    if (!exchanges.includes(company.exchange)) {
      exchanges.push(company.exchange)
    }
  }
  
  return (
    <>
      <div className="dropdown">
        <div className="control">
          <div className="selected-value">Select exchange ...</div>
          <div className="arrow"></div>
        </div>
        <div className="options">
          {exchanges && exchanges.map((exchange) => (
            <div className="option">{exchange}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DropdownExchange;
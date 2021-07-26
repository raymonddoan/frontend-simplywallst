import React from 'react';


const DropdownFilter = (props) => {
  const {companies, setExchange, setScore} = props

  let exchanges = []
  for (const company of companies) {
    if (!exchanges.includes(company.exchange)) {
      exchanges.push(company.exchange)
    }
  }
  exchanges.unshift("")

  const handleOnChangeExchange = (e) => {
    let value = e.target.value;
    setExchange(value)
  }
  
  return (
    <>
      <div className="filter-options">
        <div className="filter-option">
          <label>Exchange</label>
          <select className="exchange" onChange={handleOnChangeExchange}>
            {exchanges && exchanges.map((exchange) => (
              <option className="option" key={exchange} value={exchange}>{exchange}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default DropdownFilter;
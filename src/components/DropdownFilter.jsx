import React from 'react';


const DropdownFilter = (props) => {
  const {data, setValue, label} = props

  const handleOnChange = (e) => {
    let value = e.target.value;
    setValue(value)
  }
  
  return (
    <>
      <div className="filter-options">
        <div className="filter-option">
          <label>{label}: </label>
          <select className="exchange" onChange={handleOnChange}>
            {data && data.sort((a, b) => a - b).map((option) => (
              <option className="option" key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default DropdownFilter;
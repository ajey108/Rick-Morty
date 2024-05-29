import React, { useState } from 'react';

const FilterBtn = ({name,index,items}) => {
  const [selectedOption, setSelectedOption] = useState('flexRadioDefault1');

  const handleChange = (event) => {
    setSelectedOption(event.target.id);
  };

 
  return (
    <div>
  <style jsx>
{`
  .x:checked + label{
    background-color:#0b5ed;
    color:white;
  }
  input[type="radio"] {
    display: none;
  }
`}
</style>

      <div className="form-check">
        <input 
          className="form-check-input x" 
          type="radio" 
          name={name} 
          id={`${name}-${index}`}
          checked={selectedOption === 'flexRadioDefault1'}
          onChange={handleChange} 
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
         {items}
        </label>
      </div>
      
    </div>
  );
}

export default FilterBtn;

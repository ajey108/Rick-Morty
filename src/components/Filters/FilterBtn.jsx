import React, { useState } from 'react';

const FilterBtn = ({ name, index, items, task, setPageNo }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.id);
    setPageNo(1);
    task(items);
  };

  return (
    <div>
      <style jsx>{`
        .x:checked + label {
          background-color: #0b5ed7;
          color: white;
        }
        input[type="radio"] {
          display: none;
        }
      `}</style>

      <div className="form-check">
        <input
          onClick={handleChange}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          checked={selectedOption === `${name}-${index}`}
          onChange={handleChange}
        />
        <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;

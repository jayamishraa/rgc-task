import React, { useState } from 'react';

const RoleSearch = ({ roleData, setTableData }) => {
  const [formValues, setFormValues] = useState({
    location: '',
    userid: '',
    department: '',
    designation: '',
    status: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleClear = () => {
    setFormValues({
      location: '',
      userid: '',
      department: '',
      designation: '',
      status: ''
    });
    setTableData(roleData); // Reset to full data
  };

  const getUniqueOptions = (key) => {
    return [...new Set(roleData.map((item) => item[key]))];
  };

  return (
    <div className='flex'>
      {['location', 'userid', 'department', 'designation', 'status'].map((field) => (
        <div key={field} className='flex flex-col p-1'>
          <label htmlFor={field} className='text-gray-700 font-medium capitalize'>
            {field}
          </label>
          <select
            id={field}
            name={field}
            onChange={handleChange}
            className='bg-gray-50 border border-gray-300 rounded px-2 py-1 outline-none'
            value={formValues[field]}
          >
            <option disabled value=''>
              Select
            </option>
            {getUniqueOptions(field).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button
        className='bg-[#66D6B9] rounded px-2 h-8 text-white m-1 p-1'
        onClick={() => setTableData(formValues)}
      >
        Search
      </button>
      <button className='bg-[#CB444A] rounded px-2 h-8 text-white m-1 p-1' onClick={handleClear}>
        ⟳
      </button>
    </div>
  );
};

export default RoleSearch;

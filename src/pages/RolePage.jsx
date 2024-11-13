import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import RoleSearch from '../components/RoleSearch';

const RolePage = () => {
    const data = [
        { "s_no": 1, "location": "Location A", "userid": "User001", "department": "Sales", "designation": "Manager", "status": "Active", "action": "show" },
        { "s_no": 2, "location": "Location B", "userid": "User002", "department": "Marketing", "designation": "Executive", "status": "Inactive", "action": "hide" },
        { "s_no": 3, "location": "Location C", "userid": "User003", "department": "Finance", "designation": "Analyst", "status": "Active", "action": "show" }
        ,
        { "s_no": 4, "location": "Location A", "userid": "User004", "department": "HR", "designation": "Recruiter", "status": "Inactive", "action": "hide" },
        { "s_no": 5, "location": "Location B", "userid": "User005", "department": "IT", "designation": "Developer", "status": "Active", "action": "show" },
        { "s_no": 6, "location": "Location C", "userid": "User006", "department": "Operations", "designation": "Supervisor", "status": "Inactive", "action": "hide" },
        { "s_no": 7, "location": "Location A", "userid": "User007", "department": "Sales", "designation": "Assistant", "status": "Active", "action": "show" },
        { "s_no": 8, "location": "Location B", "userid": "User008", "department": "Marketing", "designation": "Manager", "status": "Inactive", "action": "hide" },
        { "s_no": 9, "location": "Location C", "userid": "User009", "department": "Finance", "designation": "Executive", "status": "Active", "action": "show" },
        { "s_no": 10, "location": "Location A", "userid": "User010", "department": "IT", "designation": "Analyst", "status": "Inactive", "action": "hide" }
    ];

  const [tableData, setTableData] = useState(data);

  const handleFilter = (filters) => {
    const filteredData = data.filter((item) => {
      return Object.keys(filters).every(
        (key) => !filters[key] || item[key] === filters[key]
      );
    });
    setTableData(filteredData);
  };

  return (
    <div className='p-5 ml-[19vw] w-[80vw]'>
      <Header />
      <div className='mt-[-390px] flex items-center'>
        <h2>Role Assignment | </h2>
        <Link to='/singleuser' className='text-blue-500 hover:underline p-1'>
          Single User
        </Link>
        |
        <p className='text-blue-500 hover:underline p-1'>Multiple User</p>
      </div>

      <div className='rounded shadow-lg bg-white mt-2 p-2'>
        <RoleSearch roleData={data} setTableData={handleFilter} />
      </div>

      <div className='rounded shadow-lg bg-white mt-2'>
        <h2 className='text-2xl p-2 font-semibold mb-4'>List of Assigned Roles</h2>
        <table className='w-full bg-white rounded-lg shadow-lg'>
          <thead>
            <tr className='text-left bg-gray-100'>
              <th className='p-3'>S.No</th>
              <th className='p-3'>Location</th>
              <th className='p-3'>User ID</th>
              <th className='p-3'>Department</th>
              <th className='p-3'>Designation</th>
              <th className='p-3'>Status</th>
              <th className='p-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className={`border-t ${index % 2 === 0 ? 'bg-[#CCE7EE]' : 'bg-[#D6F3FB]'}`}
              >
                <td className='p-3'>{item.s_no}</td>
                <td className='p-3'>{item.location}</td>
                <td className='p-3'>{item.userid}</td>
                <td className='p-3'>{item.department}</td>
                <td className='p-3'>{item.designation}</td>
                <td className='p-3'>{item.status}</td>
                <td className='p-3 text-blue-500'>
                  <button className='hover:underline mr-2'>Show</button>|
                  <button className='hover:underline ml-2'>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RolePage;

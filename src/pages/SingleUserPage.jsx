import React, { useState } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import { Outlet } from 'react-router';

const SingleUserPage = () => {
    const [ifModule, setModule] = useState(false);
    console.log(ifModule);
  return (
    <div >
        {/* <Header /> */}
        <h2 className='font-semibold mb-3'>Role Assignment (Single User)</h2>
        <div className='bg-white rounded-lg shadow-lg p-3'>

            <div className='grid grid-cols-5 gap-2 mb-6'>
            <div className='flex flex-col'>
                <label htmlFor="location" className='text-gray-700 font-medium'>Location</label>
                <select id="location" name="location" className='bg-gray-50 border border-gray-300 rounded px-2 py-1 outline-none' required>
                <option selected disabled>Select</option>
                <option>Location 1</option>
                <option>Location 2</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="department" className='text-gray-700 font-medium'>Department</label>
                <select id="department" name="department" className='bg-gray-50 border border-gray-300 rounded px-2 py-1 outline-none'>
                <option disabled selected>Select</option>
                <option>Department 1</option>
                <option>Department 2</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="user" className='text-gray-700 font-medium'>User</label>
                <select id="user" name="user" className='bg-gray-50 border border-gray-300 rounded px-2 py-1 outline-none'>
                <option selected disabled>Select</option>
                <option>User 1</option>
                <option>User 2</option>
                </select>
            </div>
            </div>

        </div>

        <div className='bg-white mt-4 rounded-lg p-3 shadow-lg'>
            <h3 className='font-semibold mb-4'>Assign Details</h3>

            <div className='grid grid-cols-5 gap-2 mb-4'>
                <div className='flex flex-col'>
                    <label htmlFor="assignLocation" className='text-gray-700 font-medium'>Assigning Location</label>
                    <select id="assignLocation" name="assignLocation" className='bg-gray-50 border border-gray-300 rounded px-2 py-1 outline-none'>
                    <option selected disabled>Select</option>
                    <option>Location A</option>
                    <option>Location B</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="station" className='text-gray-700 font-medium'>Station</label>
                    <select id="station" name="station" className='bg-gray-50 border border-gray-300 rounded px-2 py-1 outline-none'>
                    <option selected disabled>Select</option>
                    <option>Station 1</option>
                    <option>Station 2</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="status" className='text-gray-700 font-medium'>Status</label>
                    <select id="status" name="status" className='bg-gray-50 border border-gray-300 rounded px-2 py-1 outline-none'>
                    <option>Active</option>
                    <option>Inactive</option>
                    </select>
                </div>
            </div>

            <span>Module</span>
            <span className="bg-[#245251] p-1 inline-flex items-center justify-center rounded">
                <button className="text-white text-xs font-bold p-0.5 w-2 h-2 flex items-center justify-center"
                    onClick={() => setModule((bool) => !bool)}
                >{ifModule ? '-' : '+' }</button>
            </span>
            <Table ifModule={ifModule} />
             
        </div>  
        <Outlet />
    </div>
  );
};

export default SingleUserPage;

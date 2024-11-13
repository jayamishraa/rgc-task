import React, { useState } from 'react';
import { Outlet } from 'react-router';

const Sidebar = () => {
    const [ifMasterModule, setMasterModule] = useState(true); 
    const [ifTestModule, setTestModule] = useState(true);

    let masterModule = ['test1', 'test2', 'test3', 'test4'];
    let testModule = ['test1', 'test2'];

    return (
        <div className="w-[20vw] fixed h-full bg-[#245251] p-4">
            <h1 className="mt-10 text-white text-2xl font-bold">Module</h1>
            <div className="mt-2">
                <h2 className="mt-10 text-white">Master Module 
                    {/* <button onClick={()=>setMasterModule(bool => !bool)}> v </button> */}
                </h2>
                <ul className="mt-2">
                    {ifMasterModule && masterModule.map((item, index) => (
                        <li key={index} className="text-white ml-3 p-2 hover:bg-green-600 rounded">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <h2 className="text-white">Test Module 
                    {/* <button onClick={()=>setTestModule(bool => !bool)}> v </button> */}
                </h2>
                <ul className="mt-2">
                    {ifTestModule && testModule.map((item, index) => (
                        <li key={index} className="text-white ml-3 p-2 hover:bg-green-600 rounded">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    );
}

export default Sidebar;
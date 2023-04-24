
import React from "react";

function Table ({handleOffClick}) {
    return (
        <div >
            <div className=" flex flex-col">
                <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                            COUNTRY
                            </th>
                            <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                            >
                            MEDALS
                            </th>
                            
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">INDIA</td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            85
                            </td>
                            
                        </tr> 
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">USA</td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            80
                            </td>
                            
                        </tr> 
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">RUSSIA</td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            75
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">CHINA</td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            68
                            </td>
                            
                        </tr>  
                        <tr>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">JAPAN</td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            60
                            </td>
                        </tr>                       
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
         </div>
    );
  };

  export default Table;
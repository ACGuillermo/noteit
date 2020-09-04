import React from 'react';

const SpacesSidebar = () => (
    <div className="w-2/5 h-screen bg-gray-800 border-r border-gray-700 flex flex-col justify-between">
        <div>
            <div className="flex items-center w-10/12 mx-auto mt-4 h-16">
                <p className="text-white">Jacknoddy</p>
            </div>
            <div className="bg-gray-900 py-2">
                <div className="w-10/12 mx-auto">
                    <div className="flex justify-between">
                        <p className="text-white">Mathematics</p>
                        <button className="px-2 bg-teal-600">b</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="h-20 border-t border-gray-700 flex justify-center items-center">
            <button className="px-2 bg-teal-400">+</button>
            <p className="text-white font-bold">Workspace</p>
        </div>
        
    </div>
)

export default SpacesSidebar
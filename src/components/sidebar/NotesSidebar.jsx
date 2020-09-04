import React from 'react';

const NotesSidebar = () => {
    return(
        <div className="w-3/5 h-screen bg-gray-900 border-r border-gray-700">
            <div className="flex justify-center w-10/12 mx-auto items-center mt-4 h-16">
                <input type="text" placeholder="Search notes" className="w-full rounded py-2 px-4 bg-gray-800 focus:outline-none"/>
            </div>

            <div className="border-b border-t py-2 border-gray-700 border-l-2">
                <div className="w-10/12 mx-auto">
                    <p className="text-white">Big O Notation</p>
                </div>
                
            </div>
        </div>
    )
}

export default NotesSidebar
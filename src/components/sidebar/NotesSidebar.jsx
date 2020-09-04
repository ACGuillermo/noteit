import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const NotesSidebar = () => {
    const { notes } = useSelector(state => state.workspaces.workspaces.find(workspace => workspace.title === state.workspaces.selectedWorkspace))
    return(
        <div className="w-3/5 h-screen bg-gray-900 border-r border-gray-700">
            <div className="flex justify-center w-10/12 mx-auto items-center h-16">
                <input type="text" placeholder="Search notes" className="w-full rounded py-1 px-4 bg-gray-800 focus:outline-none"/>
            </div>
            {notes.map(note=>(
                <div className="border-b border-t py-2 border-gray-700 border-l-2">
                    <div className="w-10/12 mx-auto">
                        <p className="text-white text-lg">{note.title}</p>
                        <p className="text-gray-600 text-sm">Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.</p>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default NotesSidebar
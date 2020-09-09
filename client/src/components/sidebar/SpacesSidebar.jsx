import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectWorkspace } from '../../reducers/workspaces'


const SpacesSidebar = () => {
    const workspaces = useSelector(state => state.workspaces.workspaces)
    const selectedWorkspace = useSelector(state => state.workspaces.selectedWorkspace)

    const dispatch = useDispatch();

    const handleWorkspaceSelected = (title) => () => {
        dispatch(selectWorkspace(title))
    }
    return (
        <div className="w-2/5 h-screen bg-gray-800 border-r border-gray-700 flex flex-col justify-between">
            {console.log(selectWorkspace('test'))}
            <div>
                <div className="flex items-center w-10/12 mx-auto h-16">
                    <p className="text-white">Jacknoddy</p>
                </div>
                {workspaces.map(space => (
                    <div key={space.title} 
                        className={`py-2 ${space.title === selectedWorkspace ? 'bg-gray-900' : 'bg-gray-800'  }`}
                        onClick={handleWorkspaceSelected(space.title)}
                    >
                        <div className="w-10/12 mx-auto">
                            <div className="flex justify-between">
                                <p className={`${space.title === selectedWorkspace ? 'text-gray-300' : 'text-gray-500'}`}>{space.title}</p>
                                <button className="px-2 bg-teal-600">b</button>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
    
            <div className="h-20 border-t border-gray-700 flex justify-center items-center">
                <button className="px-2 bg-teal-400">+</button>
                <p className="text-white font-bold">Workspace</p>
            </div>
            
        </div>
    )
}

export default SpacesSidebar
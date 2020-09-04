import React from 'react';
import SpacesSidebar from './SpacesSidebar'
import NotesSidebar from './NotesSidebar';

const Sidebar = () => {
    return (
        <div className="w-4/12 h-screen flex">
            <SpacesSidebar />
            <NotesSidebar />
        </div>
    )
}

export default Sidebar
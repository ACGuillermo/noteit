import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import Editor from './components/editor/Editor';

function App() {
  return (
    <div className="w-full h-full bg-white flex">
      <Sidebar />
      <Editor />
    </div>
  );
}

export default App;

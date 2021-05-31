import { React, useEffect } from 'react';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {

  // set document title
  useEffect(() => {
    document.title = "FacebookClone"
  }, [])

  return (
    <div className="app">

      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>

    </div>
  );
}

export default App;

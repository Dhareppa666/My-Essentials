import React from 'react';
import Timer from './components/Timer/Timer';
import { ServerFetch } from './components/DynamicList/ServerFetch';

const App = () => {

  return (
    <div>
      <Timer />
      {/* <ServerFetch /> */}
    </div>
  );
}

export default App;

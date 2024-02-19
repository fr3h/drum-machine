import React from 'react';
import DrumMachine from './components/DrumMachine/DrumMachineComponent';
import './App.scss';

function App() {

  return (
    <div className="App">
      <div className='container d-flex justify-content-center align-items-center vh-100'>
          <DrumMachine />
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import './App.scss';
import ColorPicker from './ColorPicker/ColorPicker';

function App() {

  const [color, setColor] = useState('#FFFF00');
  const [colors] = useState([
    { name: 'red', hex: '#FF0000' },
    { name: 'yellow', hex: '#FFFF00' },
    { name: 'green', hex: '#00FF00' },
    { name: 'blue', hex: '#0000FF' },
    { name: 'cyan', hex: '#00FFFF' },
    { name: 'magenta', hex: '#FF00FF' }
  ]);

  return (
    <div className="app">
      <ColorPicker
        value={color}
        onChange={setColor}
        colors={colors}/>
    </div>
  );
}

export default App;

import Square from './components/Square';
import AddColor from './components/AddColor';
import { useState } from 'react';
function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');

  return (
    <div className="App">
      <h1> Color Play Ground Find Yours</h1>
      <Square
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
      />
      <AddColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;

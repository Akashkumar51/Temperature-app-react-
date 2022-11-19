import './App.css';
import React,{useState,useEffect} from 'react';


function App() {
  const [data, setData] = useState(10)
  const [color, setColor] = useState("cold")
  
  useEffect(() => {
    if (data >= 15) {
      setColor("hot")
    }else{
      setColor("cold")
    }
  
  }, [data])
  
  

  return (
    <div className="app-container">
      <div className='temperature-display-container'>
        <div className={`temperature-display ${color}`}>{data}°C</div>
      </div>
        <div className='button-container'>
          <button onClick={() => setData( data +1)}>+</button>
          <button onClick={() => setData(data -1)}>-</button>
        </div>
    </div>
  );
}

export default App;

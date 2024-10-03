import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    
      <>
      <button onClick={()=>{setCount( count+1)}}>increment</button>
      <br />
   
        <h3>count is {count}</h3>
      
      <br />
      <button onClick={()=>{setCount(count -1)}}>decrement</button>
    </>
  );
}

export default App;

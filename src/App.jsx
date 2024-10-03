import { useState } from "react";
import "./App.css";
import CustomButton from './CustomButton'
function App() {
  const [count, setCount] = useState(0);
  return (
    
   <div>
    <h2>this is a simple counter app</h2>
     <button onClick={() => setCount(count + 1)} style={{ color: "red"}}>
                Increment
            </button>
            
            <button onClick={() => setCount(count - 1)} style={{ color: "purple" }}>
                Decrement
            </button>
            
            <CustomButton count={count} />
   </div>
  );
}

export default App;


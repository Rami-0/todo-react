import { useState } from "react";

function Test() {
  const [count, setCount] = useState(1);
  const [nameOfList , setNameOfList] = useState("")

  return ( 
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default Test 
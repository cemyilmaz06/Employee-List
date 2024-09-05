import React, { useState } from "react";
import List from "./components/List";
import "./index.scss";
import data from "./helper/data.js";


function App() {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    if (e.target.value === "next") {
      if (count >= 0 && count <= 11) {
        setCount(count + 5);
      } else if (count >= 15) {
        setCount(count);
      }
    } else if (e.target.value === "prev") {
      if (count >= 5) {
        setCount(count - 5);
      } else if (count < 5) {
        setCount(count);
      }
    }
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {count+1} to {count + 5})
        </h5>
        <div>
          {data.slice(count,count+5).map((employee) => (
            <List key={employee.id} {...employee} />
          ))}
        </div>

       < div className="btns">
        <button  value="prev" onClick={handleClick}>
          Previous
        </button>
        <button value="next" onClick={handleClick}>
          Next
        </button>
      </div>
      </section>
    </main>
  );
}

export default App;

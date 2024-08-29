import React, { useState } from 'react';
import List from './components/List';
import "./index.scss"
import data from "./helper/data.js"

function App() {
  const [page, setPage] = useState("")
  
 
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees 1 to 5)
        </h5><div>
          {data.map((employee)=>(
  <List {...employee}/>
          ))}
        </div>
      
        <div className='btns'>
          <button >Previous</button>
          <button >Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;

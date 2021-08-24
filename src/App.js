import React, { useState } from "react";
import data from "./helper/data";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <div className="list-container">
        <h4 className="header text-danger">{people.length} birthdays today</h4>
        <List people={people} />
        <button
          onClick={() => setPeople([])}
          className="btn btn-danger w-100 mt-3"
        >
          Clear All
        </button>
      </div>
    </main>
  );
}

export default App;

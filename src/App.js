import React, { useState } from 'react';
import './style.css';
let nextId = 0;
const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const listHandler = () => {
    setValue('');
    if (value.length > 0) {
      setList([
        ...list,
        {
          id: nextId++,
          data: value,
        },
      ]);
    } else {
      alert('data is not found');
    }
  };
  const valueHandler = (e) => {
    setValue(e.target.value);
  };
  const deleteHandler = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <div className="container">
      <div className="todo">
        <h1>Todo List</h1>
        <input
          className="Inpt"
          type="text"
          value={value}
          onChange={valueHandler}
        />
        <button className="btn" onClick={listHandler}>
          Add
        </button>
      </div>
      <div className="list">
        {list.map((item) => (
          <div>
            <ul className="list">
              <li key={item.id}>
                {item.data}
                <button
                  onClick={() => deleteHandler(item.id)}
                  className="DeltBtn"
                >
                  X
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;

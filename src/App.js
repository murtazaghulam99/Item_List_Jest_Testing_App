import React, { useState } from'react';
import './App.css';
import ItemInput from './ItemInput';
import ItemCount from './ItemCount';

function App() {
  const [items, setItems] = useState([]);

  function handleSubmit(item) {
    setItems([...items, item]);
  }

  return (
    <div>
      <ItemInput onSubmit={handleSubmit} />
      <ItemCount count={items.length} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function ItemInput({ onSubmit }) {
    const [item, setItem] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(item);
        setItem('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='item'>Add item:</label>
            <input
              id='item'
              type='text'
              value={item}
              onChange={(event) => setItem(event.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    );
}

export default ItemInput;

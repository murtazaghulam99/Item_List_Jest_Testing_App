import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemInput from './ItemInput';

test('calls onSubmit with the current value of the input when submitted', () => {
  const handleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(
    <ItemInput onSubmit={handleSubmit} />
  );

  const input = getByLabelText('Add item:');
  const button = getByText('Add');

  fireEvent.change(input, { target: { value: fireEvent.click(button) } });

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith('');
  
    fireEvent.change(input, { target: { value: 'item 1' } });
    fireEvent.click(button);
  
    expect(handleSubmit).toHaveBeenCalledTimes(2);
    expect(handleSubmit).toHaveBeenCalledWith('item 1');
  });
  

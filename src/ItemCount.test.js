import React from "react";
import { render } from "@testing-library/react";
import ItemCount from "./ItemCount";

test('displays the number of items in the list', () => {
    const count = 3;
    const { getByText } = render(<ItemCount count={count} />);

    expect(getByText(`Number of items: ${count}`)).toBeInTheDocument();
});

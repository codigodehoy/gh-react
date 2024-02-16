import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from './Button';

describe('Name of the group', () => {
    it('should ', () => {
        render(<Button>Add</Button>)

        const text = screen.getByRole("button", {name: "Add"})

        expect(text).toBeInTheDocument();
    });
});
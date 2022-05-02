import SearchBar from './SearchBar';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SearchBar', () => {

    const handleQuery = jest.fn();
    beforeEach(() => render(<SearchBar setQuery={handleQuery}/>))

    test('Component is rendering', () => {
        expect(screen.getByPlaceholderText('Search any character')).toBeInTheDocument();
    });

    test('Change the query when you write in', () => {
        fireEvent.change(screen.getByPlaceholderText('Search any character'), {target: {value: 'a'}});
        expect(handleQuery).toBeCalledTimes(1);
    })
})
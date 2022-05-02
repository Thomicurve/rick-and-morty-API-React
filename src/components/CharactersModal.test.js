import {screen, fireEvent, render} from '@testing-library/react';
import CharactersModal from './CharactersModal';
import '@testing-library/jest-dom';

describe('CharactersModal', () => {
    const modalData = {
        name: 'Rick',
        status: 'Alive',
        origin: 'Earth'
    }

    const toggleShow = jest.fn();
    let CharactersModalContainer;
    beforeEach(() => {
        const {container} = render(<CharactersModal modalData={modalData} setModalData={toggleShow}/>);
        CharactersModalContainer = container;
    })

    test('Modal Props are working', () => {
        expect(screen.getByText('Name:', {exact: false})).toHaveTextContent('Rick');
        expect(screen.getByText('Status:', {exact: false})).toHaveTextContent('Alive');
        expect(screen.getByText('Planet:', {exact: false})).toHaveTextContent('Earth');
    })

    test('ToggleShow modal', () => {
        toggleShow.mockReturnValue(!false);
        fireEvent.click(CharactersModalContainer.querySelector('.btn-close'));

        expect(toggleShow).toBeCalledTimes(1);
        expect(toggleShow()).toBeTruthy();
    })
})
import {  render, fireEvent, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';

import '@testing-library/jest-dom';

describe('CharacterCard', () => {
    let CardComponent;
    const characterData = {
        name: 'Rick',
        image: '..',
        status: 'Alive'
    }
    const handleShowModal = jest.fn();

    beforeEach(() => {
        const {container} = render(<CharacterCard characterData={characterData} handleShowModal={handleShowModal}/>);
        CardComponent = container;
    })
    
    test('Props are working', () => {
        expect(screen.getByText('Rick')).toHaveTextContent('Rick');
        expect(screen.getByText('Alive')).toHaveTextContent('Alive');
    })

    test('Show modal when click the card', () => {
        fireEvent.click(CardComponent.querySelector('.character-card'));
        expect(handleShowModal).toHaveBeenCalledTimes(1);
    })
})
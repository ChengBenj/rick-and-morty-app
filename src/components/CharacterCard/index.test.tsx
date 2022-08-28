import { test, expect, vi, describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import CharacterCard from './index';

describe('<CharacterCard />', () => {
	test('Should render the character card =>', () => {
		const name = 'Alan Rails';
		const regex = new RegExp(name, 'i');

		render(
			<CharacterCard
				id={1}
				name={name}
				image='https://rickandmortyapi.com/api/character/avatar/10.jpeg'
				onClick={() => {}}
			/>
		);

		expect(screen.getByText(regex)).toBeDefined();
	});

	test.concurrent('Should do something when click on the card =>', () => {
		const name = 'Alan Rails';
		const mockFn = vi.fn();

		render(
			<CharacterCard
				id={2}
				name={name}
				image='https://rickandmortyapi.com/api/character/avatar/10.jpeg'
				onClick={mockFn}
			/>
		);

		fireEvent.click(screen.getByTestId('character-card-2'));

		expect(mockFn).toBeCalled();
	});
});

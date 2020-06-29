import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

afterEach(cleanup);

it('renders', () => {
    const { asFragment } = render(<Header text='yeah bitch' />);

    // expect(asFragment).toMatchSnapshot();
})

it('inserts text in h1', () => {
    const { getByTestId, getByText } = render(<Header text='yeah' />);

    expect(getByTestId('h1tag')).toHaveTextContent('yeah');

    expect(getByText('yeah')).toHaveClass('fancy')
})
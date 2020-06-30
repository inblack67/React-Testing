import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { server, rest } from './testServer';
import fetchPosts from './ajaxCalls/fetchPosts'
import UseEffectCycle from './components/UseEffectCycle'

afterEach(cleanup);

it('fetches posts', async () => {

    const { getByTestId, getByText } = render(<UseEffectCycle />);

    const res = await fetchPosts();
    expect(res.data[0]).toEqual({ body: 'lorem', id: 1, title: 'ipsum' });
});

it('is loading', () => {

    const { getByTestId } = render(<UseEffectCycle />);

    expect(getByTestId('loading')).toHaveTextContent('Loading...');
});
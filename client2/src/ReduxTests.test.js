import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import ReduxCode from './components/ReduxCode';
import { Provider } from 'react-redux'
import store from './store'

afterEach(cleanup);

function renderWithRedux(component){
    return {
        ...render(<Provider store={store}>
            {component}
        </Provider>)
    }
}

it('renders with redux', () => {
    const { asFragment, getByTestId } = render(<Provider store={store}>
        <ReduxCode />
    </Provider>);

    expect(asFragment).toMatchSnapshot();

    expect(getByTestId('count')).toHaveTextContent('0');

});

it('can increment on click', () => {
    // const { getByTestId, getByText } = render(<Provider store={store}>
    //     <ReduxCode />
    // </Provider>);

    // fireEvent.click(getByText('Increment'));

    // expect(getByTestId('count')).toHaveTextContent('1');

});

it('can decrement on click', () => {
    const { getByTestId, getByText } = renderWithRedux(<ReduxCode />);

    fireEvent.click(getByText('Decrement'));

    expect(getByTestId('count')).toHaveTextContent('-1');

});
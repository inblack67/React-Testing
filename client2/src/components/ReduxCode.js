import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/count';

const ReduxCode = ({ countState: { count }, increment, decrement }) => {

    const onIncrement = e => {
        increment();
    }

    const onDecrement = e => {
        decrement();
    }

    return (
        <div>
            <span data-testid='count'>{count}</span>
            <a href="#!" onClick={onIncrement}>Increment</a>
            <a href="#!" onClick={onDecrement}>Decrement</a>
        </div>
    )
}

const mapStateToProps = state => ({
    countState: state.CountState
})

export default connect(mapStateToProps, { increment, decrement })(ReduxCode);


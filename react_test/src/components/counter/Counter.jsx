import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../store/reducers/counterReducer";
import {getCounterValue} from "../../store/reducers/selectors/getCounterValue/getCounterValue";

const Counter = () => {
    const value = useSelector(getCounterValue)


    const dispatch = useDispatch();

    const incrementCounter = () => {
        dispatch(increment());
    }
    const decrementCounter = () => {
        dispatch(decrement());
    }
    return (
        <div>
                <h1 data-testid="value-title">
                    value ={value}
                </h1>
            <p>
                <button data-testid="increment" onClick={incrementCounter}>
                    increment
                </button>
                <button data-testid="decrement" onClick={decrementCounter}>
                    decrement
                </button>
            </p>

        </div>
    )
}

export default Counter;
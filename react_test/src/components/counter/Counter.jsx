import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../store/reducers/counterReducer";

const Counter = () => {
    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const incrementCounter = () => {
        dispatch(increment());
    }
    const decrementCounter = () => {
        dispatch(decrement());
    }
    return (
        <div>
            <p>
                value ={counter.value}
            </p>
            <p>
                <button onClick={incrementCounter}>
                    increment
                </button>
                <button onClick={decrementCounter}>
                    decrement
                </button>
            </p>

        </div>
    )
}

export default Counter;
import {getCounterValue} from "./getCounterValue";
import counterReducer, {decrement, increment} from "../../counterReducer";

describe('getCounterValue reducer', () => {
    test('work with empty', () => {
        expect(getCounterValue({})).toBe(0)
    })
    test('work filled ', () => {
        expect(getCounterValue({
           counter:{
               value:100
           }
        })).toBe(100)
    })
    test('increment', () => {
        expect(counterReducer({
            value: 0
        }, increment())).toEqual({value: 1})
    })
    test('decrement', () => {
        expect(counterReducer({
            value: 0
        }, decrement())).toEqual({ value: - 1
    })
    })
    test('test with empty', () => {
        expect(counterReducer(undefined, decrement())).toEqual({ value: - 1})
        expect(counterReducer(undefined, increment())).toEqual({ value: 1})

    })
})
import {render} from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import { createReduxStore } from "src/store/store";

describe('Counter', () => {
    test('renders correctly', async () => {
        const counter = render(
            <Provider store={createReduxStore()}>
                <Counter />
            </Provider>
            )
        counter.getByTestId('increment')
        const incrementBtn = counter.getByTestId('increment')
        expect(counter.getByTestId('value-title')).toHaveTextContent('0');
        userEvent.click(incrementBtn);
        expect(counter.getByTestId('value-title')).toHaveTextContent('1');
    })
})
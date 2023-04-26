import { UPDATE_TASKS } from "./actionTypes";

const initialState = {
    tasks:[]
}

const rootReducer = (state = initialState, {type, payload}) => {
    const typeAction = ({
        [UPDATE_TASKS]: () => {
            return {...state, tasks: payload}
        }
    })[type];

    return typeAction ? typeAction() : state
};
export default rootReducer;
import { CHANGE_LOADING, UPDATE_TASKS } from "./actionTypes";

const initialState = {
    tasks:[],
    loading:null
}

const rootReducer = (state = initialState, {type, payload}) => {
    const typeAction = ({
        [UPDATE_TASKS]: () => {
            return {...state, tasks: payload}
        },
        [CHANGE_LOADING]:() => {
            return {...state, loading: payload}
        }
    })[type];

    return typeAction ? typeAction() : state
};
export default rootReducer;
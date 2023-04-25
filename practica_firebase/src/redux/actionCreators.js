import { ADD_TASK, GET_TASKS } from "./actionTypes";

const getTasks = (payload) => ({
    type: GET_TASKS,
    payload
});

//! modelo de uso redux thunk
const addTask = (payload) => {
    return function(dispatch){
        fetch('xxxsssdsdadas')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type,
                    payload: data
                })
            })
    }
};


export {
    getTasks,
    addTask
}
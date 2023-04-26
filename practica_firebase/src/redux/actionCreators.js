import { UPDATE_TASKS } from "./actionTypes";

import { addDoc, collection, getDocs, query } from "firebase/firestore";
import db from '../../firebaseconfig';

const getTasks = () => {
    return function(dispatch){
        const refCollection = collection(db, 'tasks')
        const q = query(refCollection);
        getDocs(q)
            .then( docs => {
                let tasks = [];
                docs.forEach(task => {
                    const data = task.data();
                    tasks.push({
                        id: task.id,
                        ...data
                    });
                });
                dispatch({
                    type: UPDATE_TASKS,
                    payload: tasks
                });
            });
    }
};

//! modelo de uso redux thunk
const addTask = (payload) => {
    return function(dispatch){
        const refCollection = collection(db, 'tasks');
        addDoc(refCollection, {...payload, complete:false})
            .then(() => {
                const q = query(refCollection);
                return getDocs(q);
            })
            .then( docs => {
                let tasks = [];
                docs.forEach(task => {
                    const data = task.data();
                    tasks.push({
                        id: task.id,
                        ...data
                    });
                });
                dispatch({
                    type: UPDATE_TASKS,
                    payload: tasks
                });
            });
    };
};


export {
    getTasks,
    addTask
}
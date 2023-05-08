import { UPDATE_TASKS } from "./actionTypes";

import { addDoc, collection, getDocs, query, doc, updateDoc, deleteDoc } from "firebase/firestore";
import db from '../../firebaseconfig';

//! modelo de uso redux thunk
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
    
    
//? Agrega una nueva tarea
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

const deleteTask = id => {
    return async function(dispatch){
        const refDoc = doc(db, 'tasks', id);
        await deleteDoc(refDoc);
        
        const refCollection = collection(db,'tasks');
        const q = query(refCollection);
        const data = await getDocs(q);

        const docsBeforeDelete = data.docs.map( doc => {
            const taskData = doc.data();
            return {
                id: doc.id,
                ...taskData
            }
        });
        
        dispatch({
            type:UPDATE_TASKS,
            payload: docsBeforeDelete
        })
    };
};

const updateTask = ({id,payload}) => {
    const refDoc = doc(db, 'tasks', id);
    updateDoc(refDoc, payload);
};

export {
    getTasks,
    addTask,
    deleteTask,
    updateTask
}
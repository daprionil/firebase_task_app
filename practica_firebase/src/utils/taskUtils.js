import db from '../../firebaseconfig';
import { doc, updateDoc } from 'firebase/firestore';

const updateTaskUtils = ({document,payload}) => {
    const refDoc = doc(db, 'tasks', document.id);
    updateDoc(refDoc, payload);
}

export {
    updateTaskUtils
}
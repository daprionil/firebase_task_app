import React, { useEffect } from 'react';

import FormTask from './components/FormAddTask';
import TaskList from './components/TasksList';
import { getTasks } from './redux/actionCreators';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    },[])
    return (
      <div className='w-full'>
        <section className='w-full max-w-[800px] mx-auto'>
            <article className='p-3 rounded-md'>
                <FormTask />
                <TaskList />
            </article>
        </section>
      </div>
    )
}

export default App

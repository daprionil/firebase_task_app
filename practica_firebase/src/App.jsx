import React from 'react';
import FormTask from './components/formAddTask';

function App() {
    return (
      <div className='bg-red-400 flex items-center justify-center h-screen'>
        <section className='min-w-[400px] w-full max-w-[800px] mx-auto px-2'>
            <article className=' bg-gray-900 bg-opacity-30 p-3 rounded-sm'>
                <FormTask />
            </article>
        </section>
      </div>
    )
}

export default App

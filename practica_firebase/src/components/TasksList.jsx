import Message from './Message';
import { connect } from 'react-redux';
import Task from './Task';
import Loading from './Loading';

function TaskList({tasks,loading}) {
    return (
        <div className='mt-2 border-t-8 border-red-600'>
            <div className='px-4 py-2 mx-auto my-2 w-fit '>
                <p className='text-5xl font-extrabold text-center text-transparent drop-shadow-[2px_3px_0px_rgba(255,255,255,1)] bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text'>Lista de Tareas</p>
            </div>
            <div className='relative grid items-start grid-cols-1 gap-3 md:grid-cols-2 3xl:grid-cols-3'>
                {
                    !loading ?
                        tasks.length ?
                        tasks.map( (task) => <Task key={task.id} {...task}/>)
                        : < Message clases={'col-span-full'} message={'Aún no tienes Tareas, ¡¡ Agrega una Tarea !!'}/>
                    : <Loading />
                }
            </div>
        </div>
    );
}

//? Redux

const mapStateToProps = state => ({
    tasks: state.tasks,
    loading: state.loading
});

export default connect(mapStateToProps, null)(TaskList);
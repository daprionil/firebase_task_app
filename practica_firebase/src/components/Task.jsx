import { useState } from "react";
import { updateTask, deleteTask } from "../redux/actionCreators";
import { connect } from "react-redux";

function Task({id, asunto, description, complete, deleteTask}) {
    const [completeTask, setCompleteTask] = useState(complete);

    //Change State in the database firestore
    const handleComplete = () => {
        setCompleteTask(state =>  {
            const newState = !state;
            
            updateTask({id,payload:{complete:newState}});
            
            return newState;
        });
    };

    const handleDelete = () => {
        deleteTask(id);
    };

    return (
        <div className="grid grid-cols-12">
            <div className="relative col-span-9 overflow-hidden rounded-md shadow-md bg-slate-100 group">
                <div className={`p-2 ${ completeTask ? 'bg-green-400' : 'bg-red-600' }`}>
                    <p className="truncate">
                        <strong className="">Asunto: </strong>
                        {asunto}
                    </p>
                </div>
                <div className="p-2">
                    <p className="line-clamp-4">
                        {description}
                    </p>
                </div>
                <div className="flex items-center transition-all group-hover:bottom-0 duration-500 ease-out -bottom-full content-[''] absolute left-0 bg-white w-full h-full">
                    <button onClick={handleDelete} className="font-bold text-white bg-red-500 btn">Eliminar</button>
                </div>
            </div>
            <div className="relative col-span-3 bg-none aspect-square">
                <div
                    onClick={handleComplete}
                    className={
                        `cursor-pointer absolute
                        top-1/2 left-1/2 border-4
                        ${completeTask ? 'border-green-600': 'border-red-500'}
                        -translate-y-1/2 -translate-x-1/2 w-[70%] h-[70%] p-2
                        rounded-xl -rotate-12 transition-all duration-300
                        hover:-rotate-6 hover:scale-105 transform
                        ${completeTask ? 'bg-green-500' : 'bg-red-700'} shadow-md`
                    }
                >
                    <p className="absolute text-lg font-bold leading-none text-center text-white transform -translate-x-1/2 -translate-y-1/2 text-shadow left-1/2 top-1/2">
                        {completeTask ? 'Terminada': 'Sin concluir'}
                    </p>
                </div>
            </div>
        </div>
    );
};

//? Redux

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => {
        dispatch(deleteTask(id));
    }
})

export default connect(null, mapDispatchToProps)(Task);
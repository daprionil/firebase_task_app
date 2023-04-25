import { useState } from "react";
import { connect } from "react-redux";

const initialState = {
    asunto:'',
    description:''
}

function FormTask({tasks}) {
    const [infoForm, setInfoForm] = useState(initialState);

    const handleChange = ({target}) => {
        setInfoForm(state => ({...state,[target.name]: target.value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(tasks);        
    };

    return (
        <form action="" onSubmit={handleSubmit} className="grid gap-1">
            <h1 className="text-center font-bold text-xl p-3 w-fit mx-auto mb-2 bg-opacity-80  drop-shadow-md bg-slate-100 rounded-full">Agrega tus Notas</h1>
            <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                className="p-3 rounded-md bg-slate-50 bg-opacity-90 placeholder:text-slate-500 border-none outline-none input-hover-placeholder"
                value={infoForm.asunto}
                onChange={handleChange}
            />
            <textarea
                name="description"
                cols="30"
                rows="10"
                className=" resize-none rounded-md p-3 border-none outline-none bg-opacity-80 bg-slate-100 placeholder:text-slate-500 input-hover-placeholder"
                placeholder="Descripción"
                onChange={handleChange}
                defaultValue={infoForm.description}
            ></textarea>
            <button
                type="submit"
                className=" btn font-bold bg-blue-600 text-white"
            >
                Agregar
            </button>
        </form>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps, null)(FormTask);
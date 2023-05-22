import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../redux/actionCreators";

const initialState = {
    asunto:'',
    description:''
}

function FormTask({addTask}) {
    const [infoForm, setInfoForm] = useState(initialState);
    const [errors, setError] = useState([]);

    const handleChange = ({target}) => {
        setInfoForm(state => ({...state,[target.name]: target.value}))
    };

    const getErrors = dataValidate => {
        return dataValidate.map( ([key]) => {
            return `El campo de ${key} no es válido`;
        })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const objValidate = {
            asunto: ({length}) => length > 0 && length < 50,
        }
        
        //Validate form info
        const validateForm = Object.entries(infoForm).filter(([key,val]) => {
            const verify = objValidate[key];
            
            if(verify)return !verify(val);
            return !(val.length > 0 && val.length < 200);
        });
        
        
        //Actualizar Errores
        setError(getErrors(validateForm));
        
        //Si pasa la validación envía la Action para agregar el documento la tarea
        if(!validateForm.length){
            addTask(infoForm);
            return setInfoForm(initialState);
        }
    };

    return (
        <form action="" onSubmit={handleSubmit} className="grid gap-1 py-4">
            <h1 className="p-3 mx-auto mb-2 text-xl font-bold text-center text-white bg-blue-700 rounded-full w-fit bg-opacity-90 drop-shadow-md">Agrega tus Notas</h1>
            <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                className="p-3 border-none rounded-md shadow outline-none bg-slate-50 bg-opacity-90 placeholder:text-slate-500 input-hover-placeholder"
                value={infoForm.asunto}
                onChange={handleChange}
            />
            <textarea
                name="description"
                cols="30"
                rows="10"
                className="p-3 border-none rounded-md shadow outline-none resize-none bg-opacity-80 bg-slate-100 placeholder:text-slate-500 input-hover-placeholder"
                placeholder="Descripción"
                onChange={handleChange}
                value={infoForm.description}
            ></textarea>
            <div className="pb-2 mt-2">
                {
                    errors && errors.map( (err,i) => <Error key={i} errorMessage={err} />)
                }
            </div>
            <button
                type="submit"
                className="text-xl focus:outline font-bold text-white bg-blue-600 btn hover:shadow-[0_2px_0_0_black,2px_-2px_0_0_blue]"
            >
                Agregar
            </button>
        </form>
    );
}

//Components
const Error = ({errorMessage}) => {
    return (
        <p className="px-4 py-2 mx-auto mt-1 text-center text-white bg-red-800 rounded-md w-fit">{errorMessage}</p>
    );
}

// Redux
const mapDispatchToProps = (dispatch) => ({
    addTask: (payload = {name:'eso es'}) => {
        dispatch(addTask(payload));
    }
})

export default connect(null, mapDispatchToProps)(FormTask);
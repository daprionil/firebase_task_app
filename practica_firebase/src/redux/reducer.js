const initialState = {
    tasks:[
        {
            id: 210310,
            asunto: 'Severo ñero',
            description: 'lorem ipsum dolor itsem emet',
            completed: false
        }
    ]
}

const rootReducer = (state = initialState, {type, payload}) => {
    console.log({type,payload});
    return state
};
export default rootReducer;
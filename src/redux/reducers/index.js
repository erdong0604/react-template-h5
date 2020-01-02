
const initState = {
    currentPath: "/"
};

const  currentPathReducer = (state = initState, action) => {
    if(action.type === "GET_CURRENT_PATH"){
        return Object.assign({ ...state }, { currentPath: action.path });
    }
    return state;
};

export default currentPathReducer;
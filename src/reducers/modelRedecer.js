const initialModel= {
    showAddEditModel: false,
    showAlertModel: false,
    isAdd:true,
}

const ModelReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EDIT_TASK_MODEL_OPEN":
            console.log(state.showAddEditModel);
            return {
                ...state,
                showAddEditModel:action.payload,
            }
            break;

        case "ADD_EDIT_TASK_MODEL_CLOSE":
            console.log(state.showAddEditModel);
            return {
                ...state,
                showAddEditModel:action.payload,
            }
            break;
        // case "ALERT_MODEL_OPEN":
            
        //     break;
        // case "ALERT_MODEL_CLOSE":
            
        //     break;
        // case "DELETE_TASK":
            
        //     break;
       
        default:
            return state;
    }
}

export {
    initialModel,
    ModelReducer
}
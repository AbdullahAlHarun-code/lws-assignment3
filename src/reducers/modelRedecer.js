const initialModel= {
    showAddEditModel: false,
    showAlertModel: false,
    isAdd:true,
    isDeleteAll:false,
}

const ModelReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK_MODEL_OPEN":
            return {
                ...state,
                showAddEditModel:action.payload.visible,
                isAdd:action.payload.add_mode,
            }
            break;
        case "EDIT_TASK_MODEL_OPEN":
            return {
                ...state,
                showAddEditModel:action.payload.visible,
                isAdd:action.payload.add_mode,
            }
            break;

        case "ADD_EDIT_TASK_MODEL_CLOSE":
            console.log(state.showAddEditModel);
            return {
                ...state,
                showAddEditModel:action.payload,
            }
            break;
        case "ALERT_MODEL_OPEN":
            return {
                ...state,
                showAlertModel:action.payload.visible,
                isDeleteAll:action.payload.all_delete_mode,
            }
            break;
        case "ALERT_MODEL_CLOSE":
            return {
                ...state,
                showAlertModel:action.payload.visible,
                isDeleteAll:action.payload.all_delete_mode,
            }
            break;
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
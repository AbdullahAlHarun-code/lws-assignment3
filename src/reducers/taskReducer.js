const initialTask = {
   
    blankTask:{
        id: crypto.randomUUID(),
        title: "",
        description: "",
        priority: "",
        tags: [],
        isFavourite: true,
    },
    allTasks: [{
        id: crypto.randomUUID(),
        title: "New task",
        description: "New task New task",
        priority: "High",
        tags: ["python", "javascript", "Css"],
        isFavourite: true,
    }],
    filterTasks: [],
    currentTask:{}
}

const TaskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            
            return {
                ...state,
                allTasks:[...state.allTasks, action.payload.newtask],
            }
            break;
        case "UPDATE_TASK":
            return {
                ...state,
                allTasks:state.allTasks.map((itemTask) => (itemTask.id === action.payload.newtask.id?action.payload.newtask:itemTask))
            }
            
            break;
        case "DELETE_TASK":
            return {
                ...state,
                allTasks:state.allTasks.filter((t) => t.id !== action.payload.task.id)
            }
            break;
        case "DELETE_ALL_TASKS":
            return {
                ...state,
                allTasks:[]
            }
            break;
        case "UPDATE_CURRENT_TASK":
            return {
                ...state,
                currentTask:action.payload.task
            }
            break;
        case "TOOGLE_FAVOURITE":
            return {
                ...state,
                allTasks:state.allTasks.map((itemTask) => (itemTask.id === action.payload.id?({ ...itemTask, isFavourite: !itemTask.isFavourite }):itemTask))
            }
            break;
        case "SEARCH_TASK":
            return {
                ...state,
                filterTasks:[...action.payload.tasks]
            }
            break;
        default:
            return state;
    }
}

export {
    initialTask,
    TaskReducer
}
const initialTask = {
    defaultTask: {
        id: crypto.randomUUID(),
        title: "New task",
        description: "New task New task",
        priority: "High",
        tags: ["python", "javascript", "Css"],
        isFavourite: true,
    },
    blankTask:{
        id: crypto.randomUUID(),
        title: "",
        description: "",
        priority: "",
        tags: [],
        isFavourite: true,
    },
    allTasks: [],
    filterTasks: []
}

const TaskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            
            break;
        case "UPDATE_CART":
            
            break;
        case "DELETE_TASK":
            
            break;
        case "DELETE_ALL_TASKS":
            
            break;
        default:
            return state;
    }
}

export {
    initialTask,
    TaskReducer
}
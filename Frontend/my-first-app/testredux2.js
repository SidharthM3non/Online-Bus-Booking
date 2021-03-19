const redux = require('redux');

const initialState = {
    todo: [
        {task: "Buy groceries"},
        {task: "Clean house"}
    ]
}

const store = redux.createStore((state = initialState, { type, payload }) => {

    console.log(type);
    switch (type) {
        
    case "Add_Task":
        let newTask = [...state.todo, payload]
        return {todo: newTask}
    case "Delete_Task":
        var pendingTasks = state.todo.filter((td)=>{
            if(td.name != payload.name){
                return td;
            }
        })
        console.log(pendingTasks)
        return { todo: pendingTasks }
    default:
        return state
    }
})

store.subscribe(()=> console.log(store.getState()));

// 3. dispatch an action on store
store.dispatch({type: "Fetch_Tasks"});
store.dispatch({type: "Add_Task", payload: {name: "Wash utensils"}});
store.dispatch({type: "Fetch_Tasks"});
store.dispatch({type: "Delete_Task", payload: {name: "Wash utensils"}});
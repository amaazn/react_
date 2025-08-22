import {createSlice, nanoid } from '@reduxjs/toolkit';//nanoid generates unique id

const initialState = {  //ye bhi store hai pta ni
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload// ye mai input de raha hu
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )// filter ke andar har ek value ka acces milega, automaticallyn action paylod compare kar lega id
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions// exporting functonalities for components

export default todoSlice.reducer // for store ,store need awareness about all the reducers,mere andar jo jo reducers register karoge mai bas unse hi value leke update hunga
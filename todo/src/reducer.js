import {ADD_TODO} from './action'

const initialState = {
    todos: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const {value} = action.payload
            const newTodo = state.todos.concat([
                value,
            ])

            return {
                ...state,
                todos: newTodo,
            }
        }
        default:
            return state
    }
}
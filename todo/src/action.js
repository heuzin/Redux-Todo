export const ADD_TODO = 'ADD_TODO';

export function addTodo (value) {
    return {
        type: ADD_TODO,
        payload: {
            value,
        }
    }
}
import React, { createContext, useState, useReducer } from 'react';
import { todosReducer } from '../reducers/TodoReducer'
export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {

    const [todos, dispatch] = useReducer(todosReducer, [
        { text: 'Family', id: 1 },
        { text: 'Shopping', id: 2 },
        { text: 'Walk', id: 3 },
    ]);


    return (
        <TodoListContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;



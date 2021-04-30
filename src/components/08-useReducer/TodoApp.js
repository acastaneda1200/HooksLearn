import React, { useEffect, useReducer } from 'react';
import { todoReducer } from "./todoReducer";
import './styles.css';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import {  TodoAdd } from './TodoAdd';



const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    /*   return [{
          id: new Date().getTime(),
          desc: 'Aprender React', 
          done: false,
      
      }]; */
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)


    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoID) => {

        const action = {
            type: 'delete',
            payload: todoID
        }
        dispatch(action);

    }

    const handleToggle = (todoID) => {
        dispatch({
            type: 'toggle',
            payload: todoID
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,

        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
        reset();

    }



    return (
        <div>
            <h1>TodoApp ( {todos.length} ) </h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>

                <div className="col-5">
                    <TodoAdd
                        handleSubmit={handleSubmit}
                        handleInputChange={handleInputChange}
                        description={description}
                    />

                </div>
            </div>

        </div>
    )
}

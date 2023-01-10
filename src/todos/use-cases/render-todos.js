import { Todo } from '../models/todo.model';
import { createTodoHTML } from './';


let elem = '';

/**
 * 
 * @param {String} elementId
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {


    if (!elem) 
        elem = document.querySelector( elementId);

    if (!elem) throw new Error(`Elem ${ elementId} not found`);


    elem.innerHTML = '';

    //TODO: referencia
    const element = document.querySelector( elementId );

    todos.forEach(todo => {
        element.append( createTodoHTML(todo))
    });
}
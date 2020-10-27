import React from 'react'
import TodoListItem from './todo-list-item'

const TodoList = ( {todoData} ) => {

    const renderTodoData = todoData.map(item => {
        return <li>< TodoListItem {...item} /></li>
    })

    return (
        <ul>
            {renderTodoData}
        </ul>
    )
}

export default TodoList
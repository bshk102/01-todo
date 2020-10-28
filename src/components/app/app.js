import React from 'react'
import './app.css'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

const App = () => {

    const todoData = [
        { label: 'Drink Cofee', important: false, id: 1 },
        { label: 'Build React App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            
            <TodoList todoData={todoData} />
        </div>
    )
}

export default App
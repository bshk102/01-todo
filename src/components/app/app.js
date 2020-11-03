import React, { Component } from 'react'
import './app.css'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            todoData : [
                { label: 'Drink Cofee', id: 1 },
                { label: 'Build React App', id: 2 },
                { label: 'Have a lunch', id: 3 }
            ]
        }

        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                const idx = todoData.findIndex(el => el.id === id)
                return {
                    todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
                }
            })
        }
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                
                <TodoList 
                    todoData={ this.state.todoData }
                    onDeleted={ this.deleteItem } />
            </div>
        )       
    }
}
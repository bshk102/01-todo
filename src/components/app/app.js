import React, { Component } from 'react'
import './app.css'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form/item-add-form'

export default class App extends Component {
    constructor() {
        super()

        this.maxId = 100

        this.createTodoItem = (label) => {
            return {
                label,
                done: false,
                important: false,
                id: this.maxId++
            }
        }

        this.state = {
            todoData : [
                this.createTodoItem('Drink Cofee'),
                this.createTodoItem('Build React App'),
                this.createTodoItem('Have a lunch')
            ],
            term : '',
            filter: 'all'
        }

        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                const idx = todoData.findIndex(el => el.id === id)
                return {
                    todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
                }
            })
        }

        this.addItem = (text) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: [...todoData, this.createTodoItem(text)]
                }
            })
        }
       
        this.toggleProperty = (arr, id, propName) => {
            const idx = arr.findIndex(el => el.id === id)
            const oldItem = arr[idx]
            const newItem = {...oldItem, [propName]: !oldItem[propName]}

            return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
        }

        this.onToggleImportant = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'important')
                }
            })
        }

        this.onToggleDone = (id) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'done')
                }
            })
        }

        this.search = (items, term) => {
            if (term.length === 0) {
                return items
            }

            return items.filter((item) => {
                return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
            })
        }

        this.onSearchChange = (term) => {
            this.setState({ term })
        }

        this.filter = (items, filter) => {
            switch (filter) {
                case 'all':
                    return items
                case 'active':
                    return items.filter((item) => !item.done)
                case 'done':
                    return items.filter((item) => item.done)
                default:
                    return items
            }
        }

        this.onFilterChange = (filter) => {
            this.setState({ filter })
        }
    }

    render() {
        const { todoData, term, filter } = this.state
        const visibleItems = this.filter(this.search(todoData, term), filter)
        const doneCount = todoData.filter(item => item.done).length 
        const undoneCount = todoData.length - doneCount

        return (
            <div className="todo-app">
                <AppHeader toDo={ undoneCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={ this.onSearchChange } />
                    <ItemStatusFilter 
                        filter={ filter}
                        onFilterChange={ this.onFilterChange } />
                </div>
                
                <TodoList 
                    todoData={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone } />
                    
                <ItemAddForm onItemAdded={ this.addItem } />
            </div>
        )       
    }
}
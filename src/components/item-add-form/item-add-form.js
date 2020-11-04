import React, { Component, createRef } from 'react'
import './item-add-form.css'

export default class ItemAddForm extends Component {
    constructor() {
        super()

        this.placeholderText = 'Enter task'
        this.inputRef = createRef()
        this.state = {
            label: ''
        }
        this.onLabelChange = (event) => {
            this.setState({
                label: event.target.value
            })
        }

        this.onSubmit = (event) => {
            event.preventDefault()
            if (this.inputRef.current.value) {
                this.props.onItemAdded(this.state.label)
                this.setState({
                    label: ''
                })
                this.inputRef.current.value = ''
            }            
        }
    }

    render() {
        return (
            <form 
                className="item-add-form"
                onSubmit={ this.onSubmit }>
                <input
                    type="text"
                    className="form-control"
                    placeholder={ this.placeholderText }
                    onChange={ this.onLabelChange }
                    ref={ this.inputRef } />
                <button 
                    className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        )
    }    
}
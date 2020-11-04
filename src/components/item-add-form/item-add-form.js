import React, { Component } from 'react'
import './item-add-form.css'

export default class ItemAddForm extends Component {
    constructor() {
        super()

        this.placeholderText = 'Enter task'

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
            if (this.state.label) {
                this.props.onItemAdded(this.state.label)
                this.setState({
                    label: ''
                })
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
                    value={ this.state.label } />
                <button 
                    className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        )
    }    
}
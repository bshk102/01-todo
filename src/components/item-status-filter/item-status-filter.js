import React, { Component } from 'react'

export default class ItemStatusFilter extends Component {
    constructor() {
        super()
        
        this.onBtnClick = (e) => {
            e.target.className = 'btn btn-info'
        }
    }

    render() {
        return (
            <div 
                className="btn-group"
                onClick={ this.onBtnClick }>
                <button type="button"
                        className="btn btn-info">All</button>
                <button type="button"
                        className="btn btn-outline-secondary">Active</button>
                <button type="button"
                        className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}
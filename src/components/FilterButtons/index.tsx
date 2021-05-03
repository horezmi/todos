import React from 'react'
import './index.scss'

const FilterButtons = ({ onAll, onActive, onDone } : any) => {
    return (
        <div className="filter-buttons">
            <div className="filter-buttons__btns">
                <button 
                    className="filter-buttons__btn btn"
                    onClick={onAll}
                >   
                    All
                </button>
                <button 
                    className="filter-buttons__btn btn"
                    onClick={onActive}
                >   
                    Active
                </button>
                <button 
                    className="filter-buttons__btn btn"
                    onClick={onDone}
                >   
                    Done
                </button>
            </div>
        </div>
    )
}

export default FilterButtons;

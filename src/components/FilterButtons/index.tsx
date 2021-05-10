import React from 'react'
import './index.scss'

const FilterButtons = ({ onFilter } : any) => {
    return (
        <div className="filter-buttons">
            <div className="filter-buttons__btns">
                <button 
                    className="filter-buttons__btn btn"
                    // onClick={() => onFilter('all')}
                >   
                    All
                </button>
                <button 
                    className="filter-buttons__btn btn"
                    // onClick={() => onFilter('done')}
                >   
                    Active
                </button>
                <button 
                    className="filter-buttons__btn btn"
                    // onClick={() => onFilter('active')}
                >   
                    Done
                </button>
            </div>
        </div>
    )
}

export default FilterButtons;

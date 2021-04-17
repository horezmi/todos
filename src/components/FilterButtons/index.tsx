import React from 'react'
import './index.scss'

const FilterButtons = () => {
    return (
        <div className="filter-buttons">
            <div className="filter-buttons__btns">
                <button className="filter-buttons__btn btn">All</button>
                <button className="filter-buttons__btn btn">Active</button>
                <button className="filter-buttons__btn btn">Done</button>
            </div>
        </div>
    )
}

export default FilterButtons;

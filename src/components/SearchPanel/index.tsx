import React from 'react'
import './index.scss'

const SearchPanel = () => {
    return ( 
        <div className="search-panel">
            <div className="input-group">
                <input 
                    className="form-control-sm" 
                    type='text' 
                />
            </div>
        </div>
    )
}

export default SearchPanel;
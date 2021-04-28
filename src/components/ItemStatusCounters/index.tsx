import React from 'react'
import './index.scss' 

const ItemStatusCounters = ({ activeCount, doneCount } : any) => {
    return (
        <div className="item-status-counters">
            <span>{activeCount} active</span>
            <br />
            <span>{doneCount} done</span>
        </div>
    )
}

export default ItemStatusCounters;
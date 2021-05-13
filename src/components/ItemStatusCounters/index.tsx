import React from 'react';

import './index.scss';

const ItemStatusCounters = ({ activeCount, doneCount }: any) => (
  <div className="item-status-counters">
    <span>{activeCount} active</span>
    <span>{doneCount} done</span>
  </div>
);

export default ItemStatusCounters;

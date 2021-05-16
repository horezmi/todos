import React from 'react';
import { ItemStatusCountersPropsType } from 'types/interfaces';

import './index.scss';

const ItemStatusCounters = ({ activeCount, doneCount }: ItemStatusCountersPropsType) => (
  <div className="item-status-counters">
    <span>{activeCount} active</span>
    <span>{doneCount} done</span>
  </div>
);

export default ItemStatusCounters;

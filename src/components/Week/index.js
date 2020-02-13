import React from 'react';

import './styles.scss';

const Week = () => {
  return (
    <div className="week_container">
      <select id="weeks">
        <option value="week1" selected>Week 1</option>
        <option value="week2">Week 2</option>
        <option value="week3">Week 3</option>
        <option value="week4" >Week 4</option>
      </select>
    </div>
  )
}

export default Week;
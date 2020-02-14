import React from 'react';
import useGetData from './useGetData';
import { setGrid, setTitles } from '../../utils/common';

import './styles.scss';

const Schedule = () => {
  const data = useGetData();
  
  const grid = setGrid(data.resources);
  const columnsHeader = setTitles(grid.columnsTitles);

  if (data.error !== "") {
    return <div style={{textAlign: 'center', margin: '20px 0', color: 'red'}}>Schedule can't loaded: {data.error}</div>
  }

  return (
    <div className="schedule_container">
      <div className="schedule_grid">
        <div className="schedule_row">
          {columnsHeader.groups && columnsHeader.groups.map((groupItem, groupItemIndex) => {
            if (groupItem !== 0 && groupItem === columnsHeader.groups[groupItemIndex-1]) {
              return null;
            }
            if (groupItem === undefined) {
              return <div key={groupItemIndex} className="schedule_col_title">{groupItem}</div>
            }
            if (groupItem !== 0 && groupItem !== columnsHeader.groups[groupItemIndex+1]) {
              return <div key={groupItemIndex} className="schedule_col_group_single">{groupItem} <div className="schedule_col_group_connection" /></div>
            }
            return <div key={groupItemIndex} className="schedule_col_group_double">{groupItem} <div className="schedule_col_group_connection" /></div>
          })}
        </div>
        <div className="schedule_row">
          {columnsHeader.groups && columnsHeader.titles.map((titleItem, titleItemIndex) => {
            return <div key={titleItemIndex} className="schedule_col_title">{titleItem}</div>
          })}
        </div>
        {grid.gridData.length > 0 && grid.gridData.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="schedule_row">
              <div className="schedule_row_title">{grid.rowsTitles[rowIndex]}</div>
              {row && row.map((cell, cellIndex) => {
                return (
                  <div key={cellIndex} className="schedule_cell">
                    {cell.image && <img className="schedule_cell_img" src={cell.image} alt={cell.text} />}
                    {cell.text && <span className="schedule_cell_text">{cell.text}</span>}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Schedule;

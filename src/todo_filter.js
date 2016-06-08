import React from 'react'

export default function TodoFilter ({ onChangeFilter, filter }) {
  return (
    <ul>
      <li
        className={(filter === 'ALL') ? 'active' : ''}
        onClick={() => { onChangeFilter('ALL')}}>
        ALL
      </li>
      <li 
        className={(filter === 'ALL') ? 'active' : ''}
        onClick={() => { onChangeFilter('DONE')}}>
        DONE
      </li>
      <li 
        className={(filter === 'ALL') ? 'active' : ''}
        onClick={() => { onChangeFilter('UNDONE')}}>
        UNDONE
      </li>
    </ul>
  )
}

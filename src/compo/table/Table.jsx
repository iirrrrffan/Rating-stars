import React from 'react'
import "./table.css"

const Table = () => {
  return (
    <div>
        <h2>Table</h2>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search Your University"
          />
        </div>
        <br/>
        <br/>
        <br/>

<table className='table'>
  <tr>
    <th>Name</th>
    <th>Subjuct</th>
    <th>University</th>
  </tr>
  <tr>
    <td>irfan</td>
    <td>Sociology</td>
    <td>University</td>
  </tr>
 
</table>
</div>
  )
}

export default Table
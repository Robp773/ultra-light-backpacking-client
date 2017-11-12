import React from 'react';
import './ListTable.css';
export default function ListTable(props){

    return (
        <div className='scrollableParent'>
        <table className='resultsParent'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Weight</th>
                </tr>
                {props.displayState}
           </tbody>
        </table>
        </div>
    )
}
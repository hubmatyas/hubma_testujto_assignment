import React from 'react';

const TableRow = ({ data, level = 0, onRemove }) => {
    const keys = Object.keys(data).filter(key => key !== 'children');

    return (
        <tr>
            <td style={{ paddingLeft: `${level * 20}px` }}>
                {data.Name} <button onClick={() => onRemove(data.ID)}>Remove</button>
            </td>
            {keys.map(key => (
                <td key={key}>{data[key]}</td>
            ))}
        </tr>
    );
}

export default TableRow;

import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data, level = 0, onRemove }) => {
    return (
        <tbody>
            {data.map(item => (
                <React.Fragment key={item.data.ID}>
                    <TableRow data={item.data} level={level} onRemove={onRemove} />
                    {item.children && Object.keys(item.children).length > 0 && Object.keys(item.children).map(key => (
                        <TableBody data={item.children[key].records} level={level + 1} onRemove={onRemove} />
                    ))}
                </React.Fragment>
            ))}
        </tbody>
    );
}

export default TableBody;

import React from 'react';
import TableRow from './TableRow';
import { TableBody as MuiTableBody } from '@mui/material';

const TableBody = ({ data, level = 0, onRemove }) => {
    return (
        <MuiTableBody>
            {data.map(item => (
                <React.Fragment key={item.data.ID}>
                    <TableRow data={item.data} level={level} onRemove={onRemove} />
                    {item.children && Object.keys(item.children).length > 0 && Object.keys(item.children).map(key => (
                        <TableBody data={item.children[key].records} level={level + 1} onRemove={onRemove} />
                    ))}
                </React.Fragment>
            ))}
        </MuiTableBody>
    );
}

export default TableBody;

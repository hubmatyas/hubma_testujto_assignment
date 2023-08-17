import React from 'react';
import { TableRow as MuiTableRow, TableCell, Button } from '@mui/material';

const TableRow = ({ data, level = 0, onRemove }) => {
    const keys = Object.keys(data).filter(key => key !== 'children');

    return (
        <MuiTableRow>
            <TableCell style={{ paddingLeft: `${level * 20}px` }}>
                {data.Name}
                <Button 
                    color="error" 
                    size="small" 
                    onClick={() => onRemove(data.ID)}
                    variant="outlined"
                >
                    Remove
                </Button>
            </TableCell>
            {keys.map(key => (
                <TableCell key={key}>{data[key]}</TableCell>
            ))}
        </MuiTableRow>
    );
}

export default TableRow;

import React, { useState, useEffect } from "react";
import TableBody from "./components/Table/TableBody";
import dataSource from "./assets/data/example-data.json";
import { Container, Table, TableHead, TableRow, TableCell } from '@mui/material';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dataSource);
    }, []);

    const removeItemById = (items, id) => {
        return items
            .filter((item) => item.data.ID !== id)
            .map((item) => {
                if (item.children && Object.keys(item.children).length > 0) {
                    Object.keys(item.children).forEach((key) => {
                        item.children[key].records = removeItemById(item.children[key].records, id);
                    });
                }
                return item;
            });
    };

    const handleRemove = (id) => {
        const updatedData = removeItemById(data, id);
        setData(updatedData);
    };

    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                      {/* TODO: Výpis header */}
                      <TableCell>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody data={data} onRemove={handleRemove} />
            </Table>
        </Container>
    );
};

export default App;

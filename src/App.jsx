import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, selectData } from "./slices/dataSlice";
import HierarchyTableBody from "./components/HierarchyTable/HierarchyTableBody";
import { Container, Table } from "@mui/material";

const App = () => {
    const data = useSelector(selectData);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <Container>
            <Table>
                <HierarchyTableBody data={data} onRemove={handleRemove} />
            </Table>
        </Container>
    );
};

export default App;

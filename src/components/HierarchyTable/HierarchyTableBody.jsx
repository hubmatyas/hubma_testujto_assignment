import React, { memo, useState } from "react";
import HierarchyTableRow from "./HierarchyTableRow";
import { TableBody, TableRow, TableCell } from "@mui/material";

const HierarchyTableBody = ({ data, level = 0, onRemove }) => {
    const [isOpen, setIsOpen] = useState(false);
    const extractHeaders = (item) => {
        const headers = Object.keys(item.data).filter(
            (key) => key !== "children"
        );
        return [
            "", // not the best option, but not enough time
            "ID",
            "Name",
            ...new Set(
                headers.filter((header) => header !== "ID" && header !== "Name")
            ),
        ];
    };

    return (
        <>
            {data.map((item) => (
                <React.Fragment key={item.data.ID}>
                    <TableRow sx={{ backgroundColor: "#424242" }}>
                        {extractHeaders(item).map((header) => (
                            <TableCell
                                key={header}
                                sx={{ backgroundColor: "#424242" }}
                            >
                                {header}
                            </TableCell>
                        ))}
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>

                    <HierarchyTableRow
                        data={item.data}
                        level={level}
                        onRemove={onRemove}
                        hasChildren={!!item.children}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                    />

                    {isOpen &&
                        item.children &&
                        Object.values(item.children).map((childGroup) => (
                            <HierarchyTableBody
                                data={childGroup.records}
                                level={level + 1}
                                onRemove={onRemove}
                            />
                        ))}
                </React.Fragment>
            ))}
        </>
    );
};

export default memo(HierarchyTableBody);

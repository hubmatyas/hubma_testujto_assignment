import React, { useState, memo } from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";

const HierarchyTableRow = ({
    data,
    level = 0,
    onRemove,
    hasChildren,
    setIsOpen,
    isOpen,
}) => {
    const keys = Object.keys(data).filter((key) => key !== "children");

    return (
        <TableRow>
            <TableCell style={{ paddingLeft: `${level * 20}px` }}>
                {hasChildren && (
                    <IconButton
                        size="small"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                    </IconButton>
                )}
                {data.Name}
            </TableCell>
            {keys.map((key) => (
                <TableCell key={key}>{data[key]}</TableCell>
            ))}
            <TableCell align="right">
                <IconButton color="error" onClick={() => onRemove(data.ID)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default memo(HierarchyTableRow);

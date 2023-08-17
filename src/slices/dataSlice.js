import { createSlice } from "@reduxjs/toolkit";
import dataSource from "../assets/data/example-data.json";

export const dataSlice = createSlice({
    name: "data",
    initialState: dataSource,
    reducers: {
        removeItem: (state, action) => {
            const idToRemove = action.payload;

            const recursiveRemove = (items) => {
                const indexToRemove = items.findIndex(
                    (item) => item.data.ID === idToRemove
                );
                if (indexToRemove !== -1) {
                    items.splice(indexToRemove, 1);
                }
                items.forEach((item) => {
                    if (item.children) {
                        for (let key in item.children) {
                            recursiveRemove(item.children[key].records);
                        }
                    }
                });
            };

            recursiveRemove(state);
        },
    },
});

export const { removeItem } = dataSlice.actions;
export const selectData = (state) => state.data;
export default dataSlice.reducer;

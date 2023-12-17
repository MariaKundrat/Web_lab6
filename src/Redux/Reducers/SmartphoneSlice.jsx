import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    smartphoneItems: [],
    smartphoneTotalQuantity: 0,
};

const smartphoneSlice = createSlice({
    name: "smartphone",
    initialState,
    reducers: {
        addTosmartphone(state, action) {
            const itemIndex = state.smartphoneItems.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.smartphoneItems[itemIndex].smartphoneQuantity += 1;
            } else {
                const temp = { ...action.payload, smartphoneQuantity: 1 };
                state.smartphoneItems.push(temp);
            }

            state.smartphoneTotalQuantity += 1;
        },
        incrementQuantity(state, action) {
            const smartphoneId = action.payload;
            const smartphoneItem = state.smartphoneItems.find((item) => item.id === smartphoneId);

            if (smartphoneItem) {
                smartphoneItem.smartphoneQuantity += 1;
                state.smartphoneTotalQuantity += 1;
            }
        },
        decrementQuantity(state, action) {
            const smartphoneId = action.payload;
            const smartphoneItem = state.smartphoneItems.find((item) => item.id === smartphoneId);

            if (smartphoneItem && smartphoneItem.smartphoneQuantity > 0) {
                smartphoneItem.smartphoneQuantity -= 1;
                state.smartphoneTotalQuantity -= 1;

                if (smartphoneItem.smartphoneQuantity === 0) {
                    state.smartphoneItems = state.smartphoneItems.filter((item) => item.id !== smartphoneId);
                }
            }
        },
    },
});

export const { addTosmartphone, incrementQuantity, decrementQuantity } = smartphoneSlice.actions;
export default smartphoneSlice.reducer;
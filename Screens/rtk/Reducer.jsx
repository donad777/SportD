import { createSlice } from "@reduxjs/toolkit";
import { login, register, updateUser } from "./API";

const initialState = {
    user: null, // thông tin user đăng nhập
    cart: [], // {_id, name, price, quantity, images}
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: { // chạy trong app
        addItemToCart: (state, action) => {
            const item = action.payload;
            const index = state.cart.findIndex(e => e._id == item._id)
            if (index == -1) {
                state.cart.push({ ...item, quantity: 1 });
            } else {
                state.cart[index].quantity++
            }
        },
        changeQuantity: (state, action) => {
            const { _id, quantity } = action.payload;
            const index = state.cart.findIndex(e => e._id === _id);
            if (index !== -1) {
                state.cart[index].quantity += quantity;
                if (state.cart[index].quantity <= 0) {
                    state.cart.splice(index, 1);
                }
            }
        },
        logout: (state, action) => {
            state.user = null;
        },
        clearCart: (state, action) => {
            state.cart = [];
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item._id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            console.log("...Pending");
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log("...Rejected");
            state.user = null;
        });


        // register
        builder.addCase(register.pending, (state, action) => {
            console.log('...Pending');
        });
        builder.addCase(register.fulfilled, (state, action) => {
            // state.user = action.payload;
        });
        builder.addCase(register.rejected, (state, action) => {
            console.log('...Rejected');
            state.user = null;
        });


        // updateUser
        builder.addCase(updateUser.pending, (state, action) => {
            console.log('...Pending');
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            console.log('...Rejected');
        });
    }
});

export const { addItemToCart, logout, clearCart, changeQuantity, removeItem } = appSlice.actions;
export default appSlice.reducer;





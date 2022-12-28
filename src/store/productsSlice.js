import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:3333/products"
const initialState = {
    products: [],
    isLoading: false,
    isError: false
}
export const getProducts = createAsyncThunk('productList/getProducts', async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {

        const result = await axios.get(baseUrl)

        return result.data

    } catch (error) {
        return rejectWithValue(error)
    }

})
const productSlice = createSlice({
    name: "productList",
    initialState,
    reducers: {},
    extraReducers:
    {
        [getProducts.pending]: (state, action) => {
            state.isLoading = true;

        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload

        },
        [getProducts.rejected]: (state, action) => {
            state.isError = true
            state.isLoading = false;
        },
    }

})

export const productReducer = productSlice.reducer;

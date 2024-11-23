import { createAsyncThunk } from '@reduxjs/toolkit'
import AxiosHelper from '../Helpers/AxiosHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = createAsyncThunk(
    "users/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .post("/users/login", data);
            console.log(response);
            await AsyncStorage.setItem('token', response.token)
            await AsyncStorage.setItem('token', response.refreshToken)
            AxiosHelper(response.token)
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const register = createAsyncThunk(
    "users/register",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .post("/users/register", data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const getNew = createAsyncThunk(
    "news/get",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .get("/news/get", data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const getProducts = createAsyncThunk(
    'products/category/getProducts',
    async (id, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().get(`/products/category/${id}`);
            console.log(response); // Kiểm tra dữ liệu trả về
            return response;
        } catch (error) {
            console.log('API Error:', error); // In lỗi để kiểm tra
            return rejectWithValue(error.response.data);
        }
    }
);

export const getCate = createAsyncThunk(
    "category-add/get",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .get("category-add/get", data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const updateUser = createAsyncThunk(
    'users/edit',
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().post('/users/edit', data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getData = createAsyncThunk(
    'products',
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().get('/products', data);
            console.log(response)
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

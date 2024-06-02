import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://665c76c93e4ac90a04d9a04f.mockapi.io/:contats';

export const fetchContats = createAsyncThunk(
    'contats/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contats');
            return response.data
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const addContats = createAsyncThunk(
    'contats/addContats',
    async ({ id, name, phone }, thunkAPI) => {
        try {
            const response = await axios.post('/contats', { id, name, phone });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contats/deleteContact',
    async (ContactId, thunkAPI) => {
        try {
            const response = await axios.delete(`contats/${ContactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
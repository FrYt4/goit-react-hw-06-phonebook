import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://665c76c93e4ac90a04d9a04f.mockapi.io/contacts';

export const fetchContats = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const addContats = createAsyncThunk(
    'contacts/addContats',
    async ({ id, name, phone }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { id, name, phone });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (ContactId, thunkAPI) => {
        try {
            const response = await axios.delete(`contacts/${ContactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
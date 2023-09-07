import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadItineraries = createAsyncThunk('load_itineraries', async () => {
    
    const petition = await axios('http://localhost:3000/api/itineraries')
    return petition.data
        
})
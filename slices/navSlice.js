import { createSlice } from "@reduxjs/toolkit";

// This is the initial state of the Global store
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};

// This is a "slice" of the Global store
export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

// Same as "export const navActions = navSlice.actions;"
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

// Export the reducer to be used in the Global store
export default navSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initState = {
	saved: [],
};

const ToysSlice = createSlice({
	name: 'templates',
	initialState: initState,
	reducers: {
		add: (state, action) => {
			state.saved.push(action.payload);
		},
		remove: (state, action) => {
			state.saved = state.saved.filter((e) => e.id != action.payload.id);
		},
	},
});

export const { add, remove } = ToysSlice.actions;
export default ToysSlice.reducer;

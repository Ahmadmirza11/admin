import { createSlice } from '@reduxjs/toolkit';

export const firmSlice = createSlice({
  name: 'firms',
  initialState: {
    firms: [],
    totalPages: 1,
    currentPage: 1,
    selectedFirm: null,
  },
  reducers: {
    setFirms: (state, action) => {
      state.firms = action.payload.firms;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSelectedFirm: (state, action) => {
      state.selectedFirm = action.payload;
    },
  },
});

export const { setFirms, setCurrentPage, setSelectedFirm } = firmSlice.actions;

export default firmSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from '../store';

interface IInitial {
  count: number;
}

const initialState: IInitial = {
  count: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.count = state.count + payload;
    },
    decrement: (state, { payload }) => {
      state.count = state.count - payload;
    },
  },
});

const persistConfig = {
  key: 'basket',
  storage,
};

export const persistBasketReducer = persistReducer(
  persistConfig,
  basketSlice.reducer
);

// Actions
export const { increment, decrement } = basketSlice.actions;

// Selectors
export const getBasket = (state: RootState) => state.basket.count;

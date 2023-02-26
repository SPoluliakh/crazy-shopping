import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './catalogueOperations/catalogueOperations';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistBasketReducer } from './basket/basketSlice';

export const store = configureStore({
  reducer: {
    basket: persistBasketReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    productsApi.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

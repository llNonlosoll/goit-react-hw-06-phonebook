import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// Створення state за допомогою configureStore Redux
export const store = configureStore({
  reducer: {
    // Reducer для управління станом контактів
    contacts: contactsReducer,
    // Reducer для управління станом фільтру
    filter: filterReducer,
  },
  // Застосування middleware за допомогою getDefaultMiddleware
  // для ігнорування окремих Actions
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Створення персистентного сховища === localStorage
export const persistor = persistStore(store);

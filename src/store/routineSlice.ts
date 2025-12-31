import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type RoutineState = {
  message: string;
};

const initialState: RoutineState = {
  message: getLocalStorage('message', ''),
};

const routineSlice = createSlice({
  name: 'routine',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<RoutineState['message']>) => {
      state.message = action.payload;
      localStorage.setItem('message', JSON.stringify(action.payload));
    },
  },
});

function getLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) ?? 'null') ?? defaultValue;
  } catch {
    return defaultValue;
  }
}

export default routineSlice.reducer;

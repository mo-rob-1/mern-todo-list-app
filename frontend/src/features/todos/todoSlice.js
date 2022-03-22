import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "./todoService";

const initialState = {
  todos: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new todo
export const createTodo = createAsyncThunk("todos/create", async (todoData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await todoService.createTodo(todoData, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// // Get user goals
// export const getGoals = createAsyncThunk("goals/getAll", async (_, thunkAPI) => {
//   try {
//     const token = thunkAPI.getState().auth.user.token;
//     return await goalService.getGoals(token);
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

// // Delete user goal
// export const deleteGoal = createAsyncThunk("goals/delete", async (id, thunkAPI) => {
//   try {
//     const token = thunkAPI.getState().auth.user.token;
//     return await goalService.deleteGoal(id, token);
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = todoSlice.actions;
export default todoSlice.reducer;

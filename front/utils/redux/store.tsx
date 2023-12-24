import { configureStore } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';

export interface AuthState {
  loggedIn:boolean,
  username:string | undefined
}

const initialState:AuthState = {
  loggedIn : false,
  username : undefined
}
export const authSlice = createSlice({
  name:'auth',
  initialState:initialState,
  reducers: {
    login:(state,actions)=> {
      state.loggedIn = true,
      state.username = actions.payload.username
    },
    logout:(state) => {
      state.loggedIn = false,
      state.username = undefined
    }
  }

})
const store = configureStore({
  reducer: {
    auth:authSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const { dispatch } = store;
const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, dispatch, useSelector, useDispatch };
import {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

type IUsersSliceType = {
    users: IUser[]
}

export const initialState: IUsersSliceType = {users: []}

const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
   try {
       const users=await fetch("https://jsonplaceholder.typicode.com/users")
           .then(value => value.json())

       return (thunkAPI.fulfillWithValue(users))
   } catch (e){
       console.log(e)
       return (thunkAPI.rejectWithValue('some error'))
   }
})

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload
    })
        .addCase(loadUsers.rejected,(state,action)=>{console.log(state,action)})

})
export const usersSliceActions = {...userSlice.actions, loadUsers}
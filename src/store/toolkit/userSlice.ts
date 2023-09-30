
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserState {
    user: null | {
        id: string;
        name: string;
        email: string;
        access_token: string
    };
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<null | UserState['user']>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export const selectUserId = createSelector(
    (state: RootState) => state.user.user,
    (user) => user?.id || null
);

export default userSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Comment {
    user: string;
    productId: string;
    rating: number;
    comment: string;
    date: string;
}

interface ProductCommentsState {
    comments: Comment[];
}

const initialState: ProductCommentsState = {
    comments: [],
};

const productCommentsSlice = createSlice({
    name: 'productComments',
    initialState,
    reducers: {
        addComment(state, action: PayloadAction<Comment>) {
            state.comments.push(action.payload);
        },
        setComments(state, action: PayloadAction<Comment[]>) {
            state.comments = action.payload;
        },
        clearComments(state) {
            state.comments = [];
        },
    },
});

export const { addComment, setComments, clearComments } = productCommentsSlice.actions;

export default productCommentsSlice.reducer;

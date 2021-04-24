import { createAction, createActions } from "redux-actions";

export const getType = (reduxAction) => {
    return reduxAction().type;
};

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (error) => error,
});

export const createPost = createActions({
    createPostRequest: (payload) => payload,
    createPostSuccess: (payload) => payload,
    createPostFailure: (error) => error,
});

export const updatePost = createActions({
    updatePostRequest: (payload) => payload,
    updatePostSuccess: (payload) => payload,
    updatePostFailure: (error) => error,
});

export const showModal = createAction("SHOW_POST_MODAL");
export const hideModal = createAction("HIDE_POST_MODAL");

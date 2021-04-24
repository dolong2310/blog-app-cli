import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../../api";
import * as actions from "../actions";

function* fetchPostsSaga(action) {
    try {
        const posts = yield call(api.fetchPosts);

        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (error) {
        console.log(error);
        yield put(actions.getPosts.getPostsFailure(error));
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload);
        yield put(actions.createPost.createPostSuccess(post.data));
    } catch (error) {
        console.log("fucking error: ", error);
        yield put(actions.createPost.createPostFailure(error));
    }
}

function* updatePostSaga(action) {
    try {
        const updatedPost = yield call(api.updatePost, action.payload);
        yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
    } catch (error) {
        console.log("fucking error: ", error);
        yield put(actions.updatePost.updatePostFailure(error));
    }
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;

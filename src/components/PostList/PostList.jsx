import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postState$ } from "../../redux/selectors";

PostList.propTypes = {};

function PostList(props) {
    const dispatch = useDispatch();
    const posts = useSelector(postState$);

    console.log("Post List", posts);

    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch]);

    return (
        <Grid container spacing={2} alignItems="stretch">
            {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} />
                </Grid>
            ))}
        </Grid>
    );
}

export default PostList;

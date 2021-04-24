import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../redux/actions";

Post.propTypes = {
    post: PropTypes.object,
};

function Post({ post = {} }) {
    const dispatch = useDispatch();
    const handleLikeClick = useCallback(() => {
        dispatch(
            updatePost.updatePostRequest({
                ...post,
                likeCount: post.likeCount + 1,
            })
        );
    }, [dispatch, post]);
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updatedAt).format("HH:MM MMM DD, YYYY")}
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />

            <CardMedia
                image={post.attachment}
                title="Title"
                style={{ height: "150px" }}
            />

            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.content}
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton onClick={handleLikeClick}>
                    <FavoriteIcon />
                    <Typography component="span" color="textSecondary">
                        {post.likeCount}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;

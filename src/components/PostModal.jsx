import {
    Button,
    makeStyles,
    Modal,
    TextareaAutosize,
    TextField,
} from "@material-ui/core";
import React, { useCallback, useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, hideModal } from "../redux/actions";
import { modalState$ } from "../redux/selectors";

PostModal.propTypes = {};

const useStyles = makeStyles((theme) => ({
    paper: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        width: "400px",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    header: {
        margin: "0 0 10px 0",
    },
    title: {
        marginBottom: "10px",
    },
    textarea: {
        padding: "10px",
        marginBottom: "10px",
    },
    footer: {
        marginTop: "10px",
    },
}));

function PostModal(props) {
    const classes = useStyles();
    const [data, setData] = useState({
        title: "",
        content: "",
        attachment: "",
    });
    const dispatch = useDispatch();
    const { isShow } = useSelector(modalState$);

    const onClose = useCallback(() => {
        dispatch(hideModal());

        // reset form value
        setData({
            title: "",
            content: "",
            attachment: "",
        });
    }, [dispatch]);

    const onSubmit = useCallback(() => {
        dispatch(createPost.createPostRequest(data));
        onClose();
    }, [data, dispatch]);

    const body = (
        <div className={classes.paper} id="simple-modal-title">
            <h2>Create New Post</h2>
            <form noValidate autoComplete="off" className={classes.form}>
                <TextField
                    className={classes.title}
                    required
                    label="Title"
                    value={data.title}
                    onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                    }
                />
                <TextareaAutosize
                    className={classes.textarea}
                    rowsMin={10}
                    rowsMax={15}
                    placeholder="Content..."
                    value={data.content}
                    onChange={(e) =>
                        setData({ ...data, content: e.target.value })
                    }
                />
                <FileBase64
                    accept="image/*"
                    multiple={false}
                    type="file"
                    value={data.attachment}
                    onDone={({ base64 }) =>
                        setData({ ...data, attachment: base64 })
                    }
                />
                <div className={classes.footer}>
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        fullWidth
                        onClick={onSubmit}
                    >
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );

    return (
        <div>
            <Modal open={isShow} onClose={onClose}>
                {body}
            </Modal>
        </div>
    );
}

export default PostModal;

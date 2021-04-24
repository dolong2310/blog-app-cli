import { Container, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import PostList from "../components/PostList/PostList";
import PostModal from "../components/PostModal";
import { showModal } from "../redux/actions";

HomePage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function HomePage(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleOpenPostModal = useCallback(() => {
        dispatch(showModal());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />

            <PostModal />
            <Fab
                color="primary"
                className={classes.fab}
                onClick={handleOpenPostModal}
            >
                <AddIcon />
            </Fab>
        </Container>
    );
}

export default HomePage;

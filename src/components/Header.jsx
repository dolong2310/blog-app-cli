import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";

Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        marginBottom: "20px",
        fontWeight: "lighter",
        padding: "5px 0",
        textAlign: "center",
    },
}));

function Header(props) {
    const classes = useStyles();
    return (
        <Typography variant="h4" className={classes.container}>
            Header
        </Typography>
    );
}

export default Header;

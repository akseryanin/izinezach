import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom";
import {pages} from "../data/pages";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));



export default function EnterButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button><NavLink to={pages.home}>Home</NavLink></Button>
                <Button><NavLink to={pages.login}>Login</NavLink></Button>
                <Button><NavLink to={pages.signUp}>Sign Up</NavLink></Button>
            </ButtonGroup>
        </div>
    );
}
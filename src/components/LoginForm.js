import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {pages} from "../data/pages";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        maxWidth: '700px'
    },
}));

export default function LoginForm() {
    const classes = useStyles();

    const [ip, setIp] = useState('');
    const [password, setPassword] = useState('');

    function signupClick() {
        const data = {action: 'login',ip, password};
        console.log(data);
        // HERE здесь делать отправку на сервер
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="IP" onChange={(e) => {
                setIp(e.target.value)
            }}/>
            <TextField id="standard-basic" label="Password" onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <div><a href={pages.passwordRecover}>Forgot password?</a></div>
            <Button variant="contained" color="primary" onClick={signupClick}>
                Login
            </Button>
        </form>
    );
}
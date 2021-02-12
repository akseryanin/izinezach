import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        maxWidth: '700px'
    },
}));

export default function SignUpForm() {
    const classes = useStyles();

    const [ip, setIp] = useState('');
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [unit, setUnit] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    function signupClick() {
        const data = {action: 'register', ip, login, name, surname, unit, password, email};
        console.log(data);
        // HERE нужен запрос на сервер
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="IP" onChange={(e) => {setIp(e.target.value)}}/>
            <TextField id="standard-basic" label="Name" onChange={(e) => {setName(e.target.value)}}/>
            <TextField id="standard-basic" label="Surname" onChange={(e) => {setSurname(e.target.value)}}/>
            <TextField id="standard-basic" label="Unit" onChange={(e) => {setUnit(e.target.value)}}/>
            <TextField id="standard-basic" label="Password" onChange={(e) => {setPassword(e.target.value)}}/>
            <TextField id="standard-basic" label="Email" onChange={(e) => {setEmail(e.target.value)}}/>
            <Button variant="contained" color="primary" onClick={signupClick}>
                Sign Up
            </Button>
        </form>
    );
}
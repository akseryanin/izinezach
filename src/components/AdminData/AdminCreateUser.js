import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        maxWidth: '700px'
    },
}));

export default function AdminCreateUser() {
    const classes = useStyles();

    const right = [];

    const [rights, setRights] = useState('system-admin');
    const [ip, setIp] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    function signupClick() {
        const data = {action: 'admin-create-user', rights, ip, password, email};
        console.log(data);
        // HERE нужен запрос на сервер
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div><FormControl component="fieldset">
                <FormLabel component="legend">User rights</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={rights} onChange={(e) => {
                    setRights(e.target.value)
                }}>
                    <FormControlLabel value="admin-system" control={<Radio/>} label="System Administrator"/>
                    <FormControlLabel value="admin-database" control={<Radio/>} label="Database Administrator"/>
                    <FormControlLabel value="user" control={<Radio/>} label="Regular User"/>
                </RadioGroup>
            </FormControl>
            </div>
            <TextField id="standard-basic" label="IP" onChange={(e) => {
                setIp(e.target.value)
            }}/>
            <TextField id="standard-basic" label="Password" onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <TextField id="standard-basic" label="Email" onChange={(e) => {
                setEmail(e.target.value)
            }}/>
            <Button variant="contained" color="primary" onClick={signupClick}>
                Create user
            </Button>
        </form>
    );
}
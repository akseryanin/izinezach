import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AdminCreateUser from "../components/AdminData/AdminCreateUser";
import AdminDeleteUser from "../components/AdminData/AdminDeleteUser";
import AdminEditUser from "../components/AdminData/AdminEditUser";
import TextSearch from "../components/User/TextSearch";
import MistakesSearch from "../components/User/MistakesSearch";
import DatabaseStatistics from "../components/User/DatabaseStatistics";
import FormulasApplication from "../components/User/FormulasApplication";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={4}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function UserPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Text search" {...a11yProps(0)} />
                    <Tab label="Mistakes search" {...a11yProps(1)} />
                    <Tab label="Database statistics" {...a11yProps(2)} />
                    <Tab label="Formulas application" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <TextSearch/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MistakesSearch/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DatabaseStatistics/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <FormulasApplication/>
            </TabPanel>
        </div>
    );
}
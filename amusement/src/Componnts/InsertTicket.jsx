import { Button, Container, TextField } from '@mui/material'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, {useEffect , useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import InputLabel from '@mui/material/InputLabel';
import { useHistory } from "react-router-dom";
import BaseUrl from './BaseUrl';
import axios from 'axios';


// for snack bar
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const InsertTicket = () => {

    let history = useHistory();

    // For snack bar - open
    const [open, setOpen] = React.useState(false);

    // For snack bar - close
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    // Get all activities
    const [activities, setActivities] = useState([]);
    useEffect( () => {
        axios.get(`http://localhost:8080/api/getAllActivities`).then( response => {
            setActivities(response.data);
        })
    }, []);

    // Get all customers
    const [customers, setCustomers] = useState([]);
    useEffect( () => {
        axios.get(`http://localhost:8080/api/getAllCustomers`).then( response => {
            setCustomers(response.data);
        })
    }, []);

    // const [ticket, setTicket] = useState({});

    const [bill, setBill] = useState();
    const [dateTime, setDateTime] = useState();
    const [activity, setActivity] = useState({});
    const [customer, setCustomer] = useState({});

    const data = {bill, dateTime, activity, customer};
    const formHandler = (e) => {
        
        // insertTicketDetails(ticket);
        insertTicketDetails(data);
        console.log(data);
        e.preventDefault();
    };

    const insertTicketDetails = (data) => {
        axios.post(`${BaseUrl}/insertTicket`, data).then(
            (response) => {
                history.push('/activitylist');
                setOpen(true);
            },
            (error) => {
                console.log(error);
                console.log("Error");
            }
        )
    }

    return (
        <Container maxWidth='sm mt-5'>
            <form onSubmit={formHandler}>
                <TextField
                    label='Bill'
                    type='number'
                    fullWidth
                    className='mb-3'
                    onChange={ (e) => {
                        setBill(e.target.value)
                    }}
                />
                <TextField
                    label=''
                    type='datetime-local'
                    fullWidth
                    className='mb-3'
                    onChange={ (e) => {
                        setDateTime(e.target.value)
                    }}
                />
                {/* <TextField
                    label='Activity ID'
                    type='number'
                    fullWidth
                    className='mb-3'
                    onChange={ (e) => {
                        setActivity({...activity, activityId:e.target.value})
                    }}
                /> */}
                <InputLabel id="demo-simple-select-label">Activity</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="activity"
                    placeholder='Activity'
                    fullWidth
                    onChange={ (e) => {
                        setActivity(e.target.value)
                    }}
                >
                {activities.map (( act) => (
                    <MenuItem value={act}>{act.activityName}</MenuItem>
                ))}
                </Select>

                <InputLabel id="demo-simple-select-label">Customer</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    fullWidth
                    onChange={ (e) => {
                        setCustomer(e.target.value)
                    }}
                >
                {customers.map (( cust) => (
                    <MenuItem value={cust}>{cust.firstName}</MenuItem>
                ))}
                </Select>
                
                {/* <TextField
                    label='User Id'
                    type='number'
                    fullWidth
                    className='mb-3'
                    onChange={ (e) => {
                        setCustomer({...customer, userId:e.target.value})
                    }}
                /> */}
                <Button type='submit' variant='contained' sx={{mt: 5}} >SUBMIT</Button>
            </form>

            {/* Alert snack bar */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Action successfull !!
                </Alert>
        </Snackbar>

        </Container>
    )
}

export default InsertTicket
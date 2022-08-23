import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';

import { useContext, useState, useEffect } from "react";
import UserContext from "../Contexts/UserContext";
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                AhindraD
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function NewAd() {
    let navigate = useNavigate();
    let { user, setUser, token } = useContext(UserContext);
    let [cats, setCats] = useState([]);
    useEffect(() => {
        fetchData();
        async function fetchData() {
            let resp = await fetch("http://localhost:8000/categories/show", { method: "GET", headers: { "Authorization": `Bearer ${token}` } });

            let respData = await resp.json();
            setCats(() => respData);
        }
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let newAd = {
            title: data.get('title'),
            price: data.get('price'),
            desc: data.get('desc'),
            seller: user._id,
            category: data.get('category'),
        };
        //https://marketplace-ebay.herokuapp.com/
        await fetch("http://localhost:8000/ads/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(newAd),
        })
            .catch(error => {
                window.alert(error);
                return;
            });
        navigate('/myads');
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add New Ad
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="title"
                                    label="Item Title"
                                    name="title"
                                    autoComplete="Item Title"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="desc"
                                    label="Description"
                                    id="desc"
                                    autoComplete="Description"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="price"
                                    label="Price"
                                    id="price"
                                    type="number"
                                    autoComplete="Price"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    disablePortal
                                    options={cats}
                                    getOptionLabel={(option) => option.name.toString()}
                                    sx={{ width: 400 }}
                                    renderInput={(params) => <TextField {...params}
                                        required
                                        fullWidth
                                        id="categories"
                                        name="categories"
                                        label="Categories" />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtratitles" color="primary" />}
                                    label="I agree to all the terms & conditions"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Post Ad
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/ads" variant="body2">
                                    Back To Homepage
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
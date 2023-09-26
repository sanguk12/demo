import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Stack, Typography, Container, Box, CssBaseline, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import {createTheme, ThemeProvider} from "@mui/material/styles";

const defaultTheme = createTheme();

function Index() {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/get/'+id)
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    const goToMain = () => {
        navigate("/")
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            { hello.title }
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            { hello.discription }
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                        </Stack>
                    </Container>
                </Box>
                <img src={hello.image} className='App-image' alt='React'/>
                <Button className='main-button' variant="contained" onClick={() => goToMain()}>Main call to action</Button>
            </main>
        </ThemeProvider>
    );
}

export default Index;
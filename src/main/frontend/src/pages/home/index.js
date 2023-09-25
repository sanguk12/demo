import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useLocation, useNavigate  } from "react-router-dom";
import {Route} from "@mui/icons-material";

const defaultTheme = createTheme();

export default function App() {
    const navigate = useNavigate();
    const [hello, setHello] = useState('')
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get('/api/list')
            .then(response => setList(response.data))
            .catch(error => console.log(error))
    }, []);

    // api 호출
    useEffect(() => {
        axios.get('/api/category/get')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    const goToSign = (id) => {
        navigate("/view", {state : {id : id}})
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
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
                            <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Secondary action</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {list.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image={card.image}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            { card.title }
                                        </Typography>
                                        <Typography>
                                            { card.discription }
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link>
                                            <Button size="small" onClick={() => goToSign(card.id)}>View</Button>
                                        </Link>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            {/* End footer */}
        </ThemeProvider>
    );
}
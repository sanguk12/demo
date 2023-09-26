import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {Pagination} from "@mui/material";

const defaultTheme = createTheme();

export default function App() {
    const navigate = useNavigate();
    let [pageIndex] = useState(0);
    const [page, setPage] = useState(1);
    const [hello, setHello] = useState('')
    const [list, setList] = useState()

    const handleChange = async (event, value) => {
        if (value != undefined) {
            pageIndex = value-1;
        }
        const result = await axios.get('/api/list?page=' + pageIndex)
            .catch(error => console.log(error))
        setList(result.data);
    };

    useEffect (() => {
        handleChange().then(r => setPage(r));
    }, []);

    // api 호출
    useEffect(function () {
        axios.get('/api/category/get')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    const goToSign = (id) => {
        navigate("/view", {state: {id: id}})
    };

    const goToEdit = (id) => {
        Swal.fire({
            icon: "warning",
            title: "해당 기능은 아직 개발 중 입니다.",
            text: "언젠간 만들겠지?"
        })
    };
    const test1 = () => {
        Swal.fire({
            imageUrl: "/images/nun2.jpg",
            title: "더넌2",
            text: "9월 27일 수요일 개봉"
        })
    }
    const test2 = () => {
        Swal.fire({
            imageUrl: "/images/zz.jpg",
            title: "사나 : 저주의 아이",
            text: "10월 4일 개봉"
        })
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
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
                            {hello.title}
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            {hello.discription}
                        </Typography>
                        <Stack
                            sx={{pt: 4}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained" onClick={() => test1()}>모양만 있음</Button>
                            <Button variant="outlined" onClick={() => test2()}>기능없음</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{py: 8}} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {list != undefined && list.content.map((card) => (
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
                                        <Button size="small" onClick={() => goToEdit(card.id)}>Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                { list != undefined &&
                    <Pagination count={list.totalPages} page={page} onChange={handleChange} sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "15px 0",
                    }}/>
                }
            </main>
        </ThemeProvider>
    );
}
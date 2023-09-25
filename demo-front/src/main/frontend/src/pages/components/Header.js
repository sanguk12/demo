import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [hello, setHello] = useState('')
    // api 호출
    useEffect(() => {
        axios.get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);
    return (
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon sx={{ mr: 2 }} onClick={() => navigate('/')} style={{cursor : "pointer"}}/>
                <Typography variant="h6" color="inherit" noWrap>
                    { hello }
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
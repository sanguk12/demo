import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";

function Index() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <Link href="/">
                <Button variant="contained">{ hello }</Button>
            </Link>
        </div>
    );
}

export default Index;
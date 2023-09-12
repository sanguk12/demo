import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
      <div>
          <Button variant="contained">{ hello }</Button>
      </div>
  );
}

export default App;
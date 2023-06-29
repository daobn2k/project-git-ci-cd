import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [data, setData] = useState(0);

  const urlApi = import.meta.env.VITE_API_URL;

  console.log(urlApi, 'urlApi');
  const testGet = async () => {
    const res = await axios.get(urlApi ? urlApi : 'http://localhost:8080/');

    setData(res?.data);
  };
  useEffect(() => {
    testGet();
  }, []);

  return (
    <>
      <div>test truy cập private : {data}</div>
    </>
  );
}

export default App;

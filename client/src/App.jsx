import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [data, setData] = useState(0);

  const testGet = async () => {
    const res = await axios.get('http://private-vvdao.ddns.net/');

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

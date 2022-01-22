
import './App.css';
import {useState,useEffect} from 'react';
import Crypto from './components/Crypto/Crypto';
function App() {
 const [crypto,setCrypto] = useState([])

 useEffect(()=>{
  fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
    "method": "GET",
    "headers": {
      'X-CMC_PRO_API_KEY': "14dc4138-0ac8-4fdd-82bd-5459a86ea3b0",
      
    },
   
  })
  .then(res=>res.json())
  .then(json=>{
    setCrypto(json.data)
  })
  
 },[])

 let hasCrypto = crypto.length >0 ;
  return (
    <div className="App">
      {hasCrypto? <Crypto crypto={crypto} /> :  <div className="circle"></div>}
   
    </div>
  );
}

export default App;

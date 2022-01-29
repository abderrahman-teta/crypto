import {Route , BrowserRouter as Routes} from 'react-router-dom'
import './App.css';
import {useState,useEffect} from 'react';
import Crypto from './components/Crypto/Crypto';
import SearchBar from './components/SearchBar/SearchBar'

function App() {
 const [crypto,setCrypto] = useState([])
 const [serchCrypto,setserchCrypto] = useState([])
 const [search,setSearch] = useState("");
 
 const handleChange = (event)=>{
   let string = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
   
   console.log(string);
   
    setSearch(string)
    if(search !==""){
      let filtered = crypto.filter(f=>{
        return f.name.includes(search)
        
      })
      
      setserchCrypto(filtered)
  
     }
    
 } 
 
 useEffect(()=>{
  fetch("http://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
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

 let hasCrypto = crypto.length > 0 ;
 /* let srecHasCrypto = serchCrypto.length >0 ;

  if(srecHasCrypto && search !==""){
    setCrypto(serchCrypto)
  } */
  const handleClick = ()=>{
    if(search !==""){
     let filtered = crypto.filter(f=>{
       return f.name.includes(search)
       
     })
     
     setserchCrypto(filtered)
 
    }
     
     
  }

  let arr = []
  if(search ==""){
    arr = crypto
  }else {
    arr = serchCrypto
  }
 console.log(crypto);
  return (
    
    <div className="App">
       <div>
            <div className="searchBar">
            <input type="text" className="search" onChange={handleChange}/>
            <a onClick={handleClick}>go</a>
        </div>
            
        </div>
      <div className='container'>
        
      {hasCrypto? <Crypto crypto={arr} /> : <div className="circle"></div>}
      </div>
      
   
    </div>
  );
}

export default App;

import {Route , BrowserRouter as Router} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './SearchBar.css'
import Crypto from '../Crypto/Crypto';
const SearchBar = (props) =>{
    let crypto = props.crypto
   
    const [search,setSearch] = useState("");
    const handleChange = (event)=>{
       
        setSearch(event.target.value)
    }
    
    let hasCrypto = crypto.length >0 ;
    return (
        <div>
            <div className="searchBar">
            <input type="text" className="search" onChange={handleChange}/>
            <a>go</a>
        </div>
            <div className='container'>
        {hasCrypto? <Crypto crypto={crypto} /> :  <div className="circle"></div>}
            </div>
        </div>
        
        
    )
}
export default SearchBar
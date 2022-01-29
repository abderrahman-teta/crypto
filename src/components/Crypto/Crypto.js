import {Route , BrowserRouter as Routes} from 'react-router-dom'
import './Crypto.css'
const Crypto = (props) =>{
    
    let crypto = props.crypto
 //let img_src = `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypt.id}.png`
   
    return (

        crypto.map((crypt)=>{
         return   <div className="card" key={crypt.id} >
             <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypt.id}.png`} />
             <h1 >{crypt.name}</h1>
             <p>{crypt.quote.USD.price} $</p>
             </div>
        })        
        
    )
}
export default Crypto
import React,{useState} from 'react'
import '../CSS/Sell.css';

let items = [];
function Sell() {
  const[itemImage,setItemImage]=useState('');
  const[itemDesc,setItemDesc]=useState('');
  const[itemPrice,setItemPrice]=useState(0);
  const[itemRating,setItemRating]=useState(0);
  const[sellItems,setSellItems]=useState([]);

  function setForSell(e){
    e.preventDefault();
    setSellItems({
      imgsrc : itemImage,
      desc : itemDesc,
      price : itemPrice,
      rating : itemRating,
    })
    console.log(sellItems)
  }
  return (
      <div className="sell">
          <form action="">
              <label htmlFor="image">Enter the image of product</label>
              <input onChange={e => setItemImage(e.target.files[0].name)} type="file" src="" alt=""  /><br />

              <label htmlFor="desc">Enter the description of product</label>
              <input onChange={e =>setItemDesc(e.target.value)} type="textarea" src="" alt="" /><br />

              <label htmlFor="price">Enter the price of product</label>
              <input onChange={e => setItemPrice(e.target.value)} type="number" src="" alt="" /><br />

              <label htmlFor="condition">Enter the condition of product</label>
              <input onChange={e => setItemRating(e.target.value)} type="number" src="" alt="" /><br />

              <button onClick={setForSell}> Submit</button>

          </form>
      </div>
  )
  
}

export default Sell
export {items}

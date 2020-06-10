import React, {useState, useEffect} from 'react';


function ShopItem({match}) {

  const [item, setItem] = useState({
      images:{
        full_background: "api img"
      },
      description: "api desc",
      interest: "api intereset",
      price: "api price",
      rarity: "api rarity",
      releaseDate: "api releasedate",
      name: "api name"
  })

  
  useEffect(() =>{
	  fetchItem()
	  // eslint-disable-next-line
  },[]);


  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortniteapi.io/items/get?id=${match.params.id}&lang=en`, {
      headers: new Headers({
        'Authorization': process.env.REACT_APP_API_KEY, 
        // 'Content-Type': 'application/x-www-form-urlencoded'
      })
    }) ;
    const item = await fetchItem.json();

    if ( item.result === true){
      setItem(item.item); 
    }
  }



  return (
    <div className="shopItem">
      <h1 className="text-center mt-5">{item.name}</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <img className="m-2" src={item.images.full_background} alt={item.name}/>
        <div className="m-2">
          <h2>{item.name} Info:</h2>
          <ul>
            <li><strong>Description: </strong>{item.description}</li>
            <li><strong>Intereset: </strong>{item.interest}</li>
            <li><strong>Rarity: </strong>{item.rarity}</li>
            <li><strong>Price: </strong>{item.price} v-bucks</li>
			<li><strong>Release Date: </strong>{item.releaseDate}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
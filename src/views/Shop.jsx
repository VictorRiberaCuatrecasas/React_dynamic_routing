import React, {useState, useEffect} from 'react';
import ItemCard from "../components/ItemCard"




function Shop() {

  useEffect(() =>{
    fetchItems()
  }, []);

  const [dailyItems, setDaily] = useState([{
    id: "api id",
    image: "api img",
    name: "api name"
  }])
  const [featuredItems, setFeatured] = useState([{
    id: "api id",
    image: "api img",
    name: "api name"
  }])
  const [upcomingItems, setUpcoming] = useState([{
    id: "api id",
    images: {
      full_background: "api img"
    },
    name: "api name"
  }])

  const fetchItems = async () => {
    const current = await fetch("https://fortniteapi.io/shop?lang=en", {
      headers: new Headers({
        'Authorization': process.env.REACT_APP_API_KEY,
        // 'Content-Type': 'application/x-www-form-urlencoded'
      })
    }) ;
    const upcoming = await fetch("https://fortniteapi.io/items/upcoming?lang=en", {
        headers: new Headers({
          'Authorization': process.env.REACT_APP_API_KEY,
          // 'Content-Type': 'application/x-www-form-urlencoded'
        })
    }) ;
    const currentItems = await current.json();
    const upcomingItems = await upcoming.json();
    console.log(currentItems);
    console.log(upcomingItems);
    if ( currentItems.result === false){
      }else{
      setDaily(currentItems.daily); 
      setFeatured(currentItems.featured);
    }
    
    if ( upcomingItems.result === true){
      setUpcoming(upcomingItems.items);
    }   
  }

  return (
    <div className="Shop">
        <h1 className="text-center mt-5">DAILY ITEMS</h1>
        <div className="items-section">
            {dailyItems.map(item => (
               <ItemCard key={item.id}  id={item.id} image={item.image} name={item.name}/>
            ))} 
        </div>

        <h1 className="text-center mt-5">FEATURED ITEMS</h1>
        <div className="items-section">
            {featuredItems.map(item => (
               <ItemCard key={item.id} id={item.id} image={item.image} name={item.name}/>
            ))} 
        </div>

        <h1 className="text-center mt-5">UPCOMING ITEMS</h1>
        <div className="items-section">
            {upcomingItems.map(item => (
                <ItemCard key={item.id} id={item.id} name={item.name} image={item.images.full_background}/>
            ))} 
        </div>
    </div>
  );
}

export default Shop;
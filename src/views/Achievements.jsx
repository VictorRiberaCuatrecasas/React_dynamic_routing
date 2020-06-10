import React, {useState, useEffect} from 'react';


function Achievements() {

  const [achievements, setAchievements] = useState([
    {
      image : "api src",
      name : "api name",
      description : "api description" 
    }
  ])

useEffect(() =>{
    fetchAchievements()
},[]);


const fetchAchievements = async () => {
  const fetchAchievements = await fetch(`https://fortniteapi.io/achievements?lang=en`, {
    headers: new Headers({
      'Authorization': process.env.REACT_APP_API_KEY, 
      // 'Content-Type': 'application/x-www-form-urlencoded'
    })
  }) ;
  const achievements = await fetchAchievements.json();

  if ( achievements.result === true){
    setAchievements(achievements.achievements); 
  } 
  console.log(achievements)
}



  return (
    <div className="Achievements" >
        <h1 className="text-center mt-5">Achievements page</h1>
        <div className="d-flex justify-content-around flex-wrap">
          {achievements.map((achievement, index) =>(
            <div key={index} className="d-flex card-achi m-3">
              <img className="" src={achievement.image} alt={achievement.name}/>
              <div className="p-2 align-self-center">
                <h5>{achievement.name}</h5>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Achievements;

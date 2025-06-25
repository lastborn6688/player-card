import React, { useState } from 'react';

const App = () => {
  const [players, setPlayers] = useState([
    {
      image:
        "https://imageio.forbes.com/specials-images/imageserve/645ea1c4fce09061884bd21c/0x0.jpg?format=jpg&crop=2774,2772,x925,y0,safe&height=416&width=416&fit=bounds",
      name: "Christiano Ronaldo",
      country: "Portugal",
      countryFlag: "path/to/portugal_flag.png",
      number: "7",
      age: "40"
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*",
      name: "Leonel Messi",
      country: "Argentina",
      countryFlag: "path/to/portugal_flag.png",
      number: "10",
      age: "38"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwn4j4iDHcAU_7GT8xO2Xcs-5ydoi3B2wVQ&s",
      name: "Neymar Junior",
      country: "Brazil",
      countryFlag: "path/to/portugal_flag.png",
      number: "7",
      age: "33"
    }
  ]);

  return (
    <main className='flex justify-evenly bg-black has-[100vh]:'>
      {players.map((player, index) => (
        <div
          key={index}
          className='p-5 bg-gradient-to-br from-yellow-200 to-yellow-500 text-black h-[33rem] rounded-2xl w-[20rem] gap-3 flex flex-col m-5'
        >
          <img
            src={player.image}
            className='rounded-2xl object-contain'
            alt={player.name}
          />
          <h2 className='text-3xl font-semibold'>{player.name}</h2>
          
          <div className='flex justify-between'>
            <h4 className='text-2xl font-medium'>{player.country}</h4>
            <img src={player.countryFlag} alt={`${player.country} flag`} />
          </div>
          
          <h1 className='text-2xl font-medium'>{player.number}</h1>
          <h1 className='text-2xl font-medium'>{player.age}</h1>
        </div>
      ))}
    </main>
  );
};

export default App;

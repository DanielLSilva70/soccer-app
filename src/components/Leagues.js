import React, {useState, useEffect} from 'react'
import '../App.css'
import axios from 'axios'


function Leagues() {
    const[data, setData] = useState([]);
   

    useEffect(() => {
        axios.get('https://api-football-standings.azharimm.site/leagues')
        .then(response => {
            // console.log(response.data.data); 
            setData(response.data.data);

        })
    },[])

  return (
    <div className="Leagues-container">
           {data.map((data) => (
               <div key={data.id} className="league-div">
                <img src={data.logos.light}/>
                <h1>{data.name}</h1>

               </div>
           ))}
    </div>
  )
}

export default Leagues
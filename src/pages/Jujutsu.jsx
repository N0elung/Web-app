import React, { useState, useEffect} from 'react'

function Jujutsu() {
    const [data, setData] = useState([])

    useEffect(() => {
    const personajes = async () => {
        const data = await fetch("https://api-vercel-eoiv.onrender.com/jujutsu-kaisen");
        const response = await data.json();
        setData(response)
        

        }
        personajes();
    }, []);
    return (
    <div className='bg-slate-700 h-screen'>
        {data.map((personaje, index) => (
            <div key={index}>
                <h1>{personaje.name}</h1>
            </div>
        ))}
    </div>
  )
}

export default Jujutsu
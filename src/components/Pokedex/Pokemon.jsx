import React from 'react'
import datos from './data'

export default function Pokemon() {
  return (
    <div className='grid grid-cols-5 p-10 gap-8'>
        {datos.slice(0,30).map((poke, index) => (
            <div key={index} className='flex flex-col justify-center items-center border border-black'>
                <p>{poke.id}</p>
                <p>{poke.name}</p>
                <p>{poke.type}</p>
            </div>
        ))}
    </div>
  )
}

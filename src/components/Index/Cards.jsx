import React from 'react'

function Cards() {
    const cards = [
        { name: "Pokemon", img: "/Poke-logo.png", desc: "Primeros 151 pokemon porque aquí somos OG y la primera generación es la mejor y si no opinas lo mismo eres poser ", href:"/pokedex" },
        { name: "Jujutsu Kaisen", img: "/Jujutsu-logo.png", desc: "NOOOOO GOJO Perdon, spoilers, gojo se muere, perdón spoilers de nuevo :p", href:"/jujutsu-kaisen" }
    ]

    return (
        <div className='bg-slate-700 flex flex-col items-center h-full w-screen text-white'>
            <div className='py-16'>
                <h1 className='font-mono font-bold text-6xl'>Puro Yeison</h1>
            </div>
            <div className='grid grid-cols items-center justify-center gap-10 p-10'>
                {cards.map((item, index) => (
                    <div className="w-[800px] h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
                    <a className='flex items-center justify-center'>
                        <img className="rounded-t-lg w-auto h-auto px-24 py-6" src={item.img} alt="" />
                    </a>
                    <div className="p-5 mt-8">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
                        <a href={item.href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Picale aquí
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
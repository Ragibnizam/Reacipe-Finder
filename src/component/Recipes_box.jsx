import React from 'react'
import { Link } from "react-router-dom";


export const Recipes_box = ({map_value}) => {
  return (
     
         <div className=" pb-3  m-3 rounded-md border inline ">
            <div className="text-start ">
              <img className='rounded-md h-80' src={map_value.image_url} width={'100%'} height={'20vh'}/>
              <h1 className='p-2'>{map_value.title}</h1>
              <p  className='p-2'>{map_value.publisher}</p>
              <Link to='/map_value.source_url' className=' p-2 bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Detail</Link>
              <Link to='/map_value.publisher_url' className='bg-green-500 m-1 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Recipe URL</Link>
            </div>
          </div>
    

  )
}

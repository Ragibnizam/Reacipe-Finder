import React from 'react'
import './Recipes.css'; 
import { Link } from "react-router-dom";


export const Recipes = () => {
  return (
    <>
     <nav className='shadow-lg'>
      <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700  '>
       <li className='m-3 '>
          <img src={"./logo.jpg"} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" width={'70px'}/>
       </li> 
       <li className='flex  items-center'>
          <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 items-center">Home</Link>
        </li>  
        <li className='flex items-center'>
          <Link to="/Search_Recipes" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Recipes</Link>
        </li>
      </ul>
    </nav>

    <div className='Recipes-bg flex justify-center place-items-center  m-auto'>
      <div className="">
        <h1 className='text-[80px] font-black  text-white'>OUR RECIPES</h1>
       <div className="flex justify-center ">
       <Link to='/Search_Recipes' className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SEARCH RECIPES</Link>
       
       </div>
      </div>
    </div>
    </>
    
   
  )
}

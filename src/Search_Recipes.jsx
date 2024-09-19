import React from 'react'
import { Link } from "react-router-dom";
import {Recipes_box} from './component/Recipes_box'


export const Search_Recipes = ({InputChange,inputData,inputData2,SearchBtn,apiData}) => {

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

    <div className='flex justify-center my-4'>
      <div className="text-center">
        <h1 className='text-[40px] font-black'>Search Recipes Whit <span className='text-blue-500'>Our Recipes</span> 
        </h1>
        <p className='m-2'>Input Recipes Separated By React</p>
        <div className="flex 	 justify-center rounded-md block text-white">
          <input type="text"   value={inputData} className='rounded-2xl	border-current text-center border w-[700px] text-black'  onChange={InputChange}/>
          <svg onClick={SearchBtn} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex  items-center bg-blue-500 w-7 h-7 ">
            <path className='text-[2px] ' strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>

        {/* <div className="m-3 grid grid-cols-4 flex justify-center"> */}
        
      {
        apiData && true ? 
        
        <div className="">
            <h1>RECIPE LIST FOR: {inputData2}</h1>
            <div className="m-3 grid grid-cols-4 flex justify-center"> 
                    {apiData.map((value,index)=>{
                  return(
            
                    <Recipes_box key={index} map_value={value} />
                    )
                   })}
            </div>
        </div>

        
        :<div className="grid justify-items-stretch ">
          <h1 className='text-red-600 font-bold flex	justify-self-center text-lg'>Please Search A Recipes </h1>
        </div>
      }

          
        
      </div>
    </div>
    </>
  )
}

import { useEffect, useState } from 'react';
import './App.css'
import { Search_Recipes } from './Search_Recipes';
import { Recipes } from './component/Recipes'
import { Error } from './Error'
 import {BrowserRouter ,Routes,Route} from "react-router-dom"

function App() {
   const[inputData,setInputData]=useState('pizza')
   const[inputData2,setInputData2]=useState('pizza')

   const[apiData,setApiData]=useState([])

    const InputChange=(e)=>{
      setInputData(e.target.value)
      
    }
    useEffect(()=>{
       fetch(`https://forkify-api.herokuapp.com/api/search?q=${inputData}`)
         .then(response=>response.json())
         .then(data => setApiData(data.recipes))
         setInputData2(inputData)
         
     },[])
    
      const SearchBtn=()=>{
         if(inputData ==" "){
        
         }else{
            fetch(`https://forkify-api.herokuapp.com/api/search?q=${inputData}`)
            .then(response=>response.json())
            .then(data => setApiData(data.recipes))
             setInputData2(inputData)
             setInputData('')
            .catch(error => {
               console.log("error");
           })
          
            
         
         }
      }
   
 
  
  return (
     
     <>
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Recipes />}  />
               <Route path="/Search_Recipes" element={<Search_Recipes SearchBtn={SearchBtn} InputChange={InputChange} inputData={inputData} inputData2={inputData2} apiData={apiData}/>}  />
               <Route path="*" element={<Error/>}/>
            </Routes>
       </BrowserRouter>

       </>
 
       
      
  )

  
  
}

export default App

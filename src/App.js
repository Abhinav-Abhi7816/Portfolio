import React, { useState } from 'react'
import './Components/App.css'
import MainContent from './Components/MainContent'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import ProjDetails from './Components/ProjDetails'
import { UserConProvider } from './Components/Contexts/UserContext'

function App() {
  const [ind, setInd] = useState(0);
  const [usedArr,setUsedArr]=useState('');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout></Layout>}>
        <Route path='' element={<MainContent></MainContent>}></Route>
        <Route path='details' element={<ProjDetails></ProjDetails>}></Route>
      </Route>
    ),
    { basename: '/Portfolio' }
  )

  return (
    <>
      <div className='all-body'>
        <UserConProvider value={{ind,setInd,usedArr,setUsedArr}}>
          <RouterProvider router={router}>  </RouterProvider>
        </UserConProvider>
      </div>
    </>
  )
}

export default App

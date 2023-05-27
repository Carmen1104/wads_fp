import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSetting } from "./components";
import { Assignment, Classes, Dashboard, Schedule, Teachers } from "./pages";

import { useStateContext } from "./contexts/ContextProvider";
import './App.css';

const App = () => {
    const  {activeMenu} = useStateContext();

  return (
    <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
                    <TooltipComponent content="Settings" position='top'>
                        <button type='button' className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray'
                        style={{background: 'blue', borderRadius: '50%'}}>
                             <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                    </div>
                )}
                <div className={
                    activeMenu
                    ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                    : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>

                <div>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/classes' element={<Classes />} />
                        <Route path='/teachers' element={<Teachers />} />
                        <Route path='/schedule' element={<Schedule />} />
                        <Route path='/assignments' element={<Assignment />} />   
                    </Routes>
                </div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App
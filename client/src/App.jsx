import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Community from './pages/Community'
import { assets } from './assets/assets'
import './assets/prism.css'

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
   
    <div className="relative dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white">
      
      {/* Menu Icon for Mobile */}
      {!isMenuOpen && (
        <img 
          src={assets.menu_icon} 
         
          className='absolute top-4 left-4 w-7 h-7 cursor-pointer md:hidden invert dark:invert-0 z-50' 
          onClick={() => setIsMenuOpen(true)}
          alt="menu"
        />
      )}

      <div className="flex h-screen w-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
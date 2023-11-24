import { useState } from 'react'
import '../css/app.css'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Outlet />
    </div>
  )
}

export default App
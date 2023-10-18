import React from 'react'
import SidePanel from './SidePanel'
import MainComponent from './MainComponent';

const DashBoard = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <SidePanel/>
      <MainComponent/>
    </div>
  )
}

export default DashBoard;
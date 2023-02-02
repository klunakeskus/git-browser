import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
         <div id="title">Main</div> 
          <Link to="/dashboard/profile/4552e08d-8bb8-4381-a73d-601bce7f3399">Go to profile</Link>
          <Link to="/dashboard">Go to root</Link>
        </div>
      </div>
   
  )
}

Main.propTypes = {}

export default Main

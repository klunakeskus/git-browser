import React from 'react'
import { Link, useParams } from 'react-router-dom'


import Head from './head'


const Profile = () => {
  const {username} = useParams()
  return (
    <div>
      <Head title="Hello" />
      
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
         <div id="title">Profile</div> 
          <Link to="/dashboard/main">Go to main</Link>
          <Link to="/dashboard">Go to root</Link>
          <div id="username"> `${username}`</div>
        </div>
      </div>
   
  )
}

Profile.propTypes = {}

export default Profile

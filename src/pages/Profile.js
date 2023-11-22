import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
const Profile = () => {
  return (
    <div class='wrapper'>
      <Sidebar />

      <div class='main'>
        <Navbar />

        <main class='content'>
          <div class='container-fluid p-0'></div>
          <div className='profile-container'>
            <div className='profile-header'>
              <img
                className='profile-avatar'
                src='https://placekitten.com/200/200' // Replace with the URL of your user's avatar
                alt='User Avatar'
              />
              <h2 className='profile-name'>John Doe</h2>
              <p className='profile-bio'>Frontend Developer</p>
            </div>
            <div className='profile-details'>
              <h3>About Me</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero in dui commodo, id luctus eros fermentum. Sed
                vel semper nulla.
              </p>
            </div>
            <div className='profile-activities'>
              <h3>Recent Activities</h3>
              <ul>
                <li>Completed project X</li>
                <li>Attended conference Y</li>
                <li>Published article Z</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Profile

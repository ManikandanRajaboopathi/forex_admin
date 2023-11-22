import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Faq = () => {
  const [value, setValue] = useState('')

  return (
    <div class='wrapper'>
      <Sidebar />

      <div class='main'>
        <Navbar />

        <main class='content'>
          <div class='container-fluid p-0'>
            <ReactQuill theme='snow' value={value} onChange={setValue} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Faq

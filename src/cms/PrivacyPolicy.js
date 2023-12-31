import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import userService from "../services/user.service";
import { ToastContainer, toast } from 'react-toastify';
const PrivacyPolicy = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState({})
const changeValue =(e)=>{
    console.log(e)
    setValue(e)
  }
  const submit =() =>{
    let payloads = {
      ...data, 
      content: value,
      _id:"652d77792e85a96073918dce"
    }
    userService.updatePrivacy(payloads)
    .then((res)=>{
      if(res.status){
        toast.success(res.message);
      }else{
        toast.error(res.message);
      }
    })
    .catch((e)=>{
      console.log(e);
    })
  }
  const handleChange=(e)=>{
    console.log(e.target.name);
setData({...data, 
  [e.target.name]:e.target.value
})
  }
  useEffect(()=>{
    userService.getCms(1)
    .then((res)=>{
console.log(res);
setData(res.data)      
setValue(res.data.content)
    })
    .catch((e)=>{
      console.log(e);
    })
  }, [])

  return (
    <div class='wrapper'>
<ToastContainer />
      <Sidebar />
      <div class='main'>
        <Navbar />

        <main class='content'>
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
  </div>
  <input type="text" class="form-control" aria-label="Default" value={data && data.title} name="title" onChange={handleChange} aria-describedby="inputGroup-sizing-default" />
</div>
          <div class='container-fluid p-0'>
            <ReactQuill theme='snow' value={value} onChange={(e)=>changeValue(e)} />
          </div>
          <div className='text-end '>
            <button className='btn primary-btn mt-3' onClick={submit}>Submit</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PrivacyPolicy

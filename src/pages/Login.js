import { useState } from "react";
import { useNavigate,Redirect,Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import userService from "../services/user.service";
const Logo = require('../asset/img/logo-467x100.png');

function App() {
    let navigate = useNavigate();   
    const [payloads,setPayloads] = useState({});  
    const handleChange=(e)=>{
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        setPayloads((previousValue)=>{return {...previousValue,[name]:value}})
    }
    const userLogin =async()=>{        
        if(!payloads || !payloads.email  || !payloads.password ){
            setPayloads({});
            toast.error("Required All Fields!");
            // setTimeout(() => {                    
            //     window.location.reload(false);
            // }, 2000)
        }else{
            try {
                let response = await userService.userLogin(payloads);
                console.log("login",response.status)
                if(response.status){
                    localStorage.setItem("token",response.data.token)                
                    toast.success("Login Successfully!");
                    setTimeout(() => {                    
                        navigate('/dashboard');
                    }, 1000)
                    //navigate.push('/dashboard');
                }else{
                    console.log("something went to wrong",response);    
                    toast.error("something went to wrong");
                    setPayloads({});
                    // setTimeout(() => {                    
                    //     window.location.reload(false);
                    // }, 3000)
                    
                }     
            } catch (error) {
                console.log("something went to wrong",error);    
                //toast.error(error.message);
                toast.error("something went to wrong");
                setPayloads({});
                // setTimeout(() => {                    
                //     window.location.reload(false);
                // }, 3000)            
                
            }

        }
        
    }
  return (
    <>
     {localStorage.getItem('token') === null || localStorage.getItem('token') === undefined ? (
        <>
    <ToastContainer />
    <main class="bg-color d-flex w-100">
    <div class="container d-flex flex-column">
        <div class="row vh-100">
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div class="d-table-cell align-middle">
                    <div class="card">
                        <div class="card-body">
                            <div class="m-sm-4">
                                <div class="text-center">
                                    <img src={Logo} alt="Charles Hall" class="img-fluid "/>
                                </div>
                                <form>
                                    <div class="mb-3">
                                        <label class="form-label">Email</label>
                                        <input class="form-control form-control-lg" type="email" value={payloads.email} onChange={(e)=>{handleChange(e)}} name="email" placeholder="Enter your email" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Password</label>
                                        <input class="form-control form-control-lg" type="password"  value={payloads.password}  onChange={(e)=>{handleChange(e)}} name="password" placeholder="Enter your password" />
                                        <small>
        <a href="index.html">Forgot password?</a>
      </small>
                                    </div>
                                    <div>
                                        <label class="form-check">
        <input class="form-check-input" type="checkbox" value="remember-me" name="remember-me" checked />
        <span class="form-check-label">
          Remember me next time
        </span>
      </label>
                                    </div>
                                    <div class="text-center mt-3">
                                        <a href="javascript:void(0)" onClick={userLogin} class="btn primary-btn">Sign in</a>
                                        {/* <!-- <button type="submit" class="btn btn-lg btn-primary">Sign in</button> --> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</main>
</>
   ):(

                <>
                  <Navigate to="/dashboard" />
                </>
            // <Navigate to="/dashboard" replace={true} />

        )}
</>
  );
}

export default App;

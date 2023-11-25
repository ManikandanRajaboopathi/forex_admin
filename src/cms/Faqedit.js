import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import { useEffect, useState  } from 'react';
import userService from "../services/user.service";
import moment from 'moment/moment';
import { useNavigate , useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Logo = require('../asset/img/logo-467x100.png');

function App() {
    const [payload, setPayload] = useState({});
     const {id} = useParams(); 
    useEffect(() => {
        userService.getFaqById(id).then(response => {
            setPayload(response.data)
        })
        .catch((e)=>{
            console.log(e);
        })
    }, [])
    const navigate = useNavigate();
    const handleSubmit =()=>{
        userService.updateFaq(payload)
        .then((res)=>{
            if (res.status) {
                toast.success(res.message);
                navigate('/faq')
            } else {
                toast.error(res.message);
            }            
        })
        .catch((e)=>{
            console.error(e)
        })
    }
    const handleChange=(e)=>{
        console.log(e.target.name, e.target.value)
        let rec = {
            ...payload,
            [e.target.name] : e.target.value
        }
        console.log(rec);
    setPayload(rec);
    }
    return (
        <div class="wrapper">
            <ToastContainer />
            <Sidebar />

            <div class="main">
                <Navbar />

                <main class="content">
                    <div class="container-fluid p-0">

                        <h1 class="h3 mb-3"><strong>Edit</strong> FAQ</h1>


                        <div class="row">
                            <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                                <div class="card flex-fill">
                                    <div class="card-header flex justify-content-between">

                                        <h5 class="card-title mb-0">FAQ</h5>
                                    </div>
                                    <form >
                                        <div class="form-row col-md-12 col-lg-12">
                                            <div class="form-group col-md-6 col-lg-6">
                                                <label for="category">Category</label>
                                                <input type="text" class="form-control mt-3 mb-3" id="category" placeholder="Enter category.." name='category' value={payload.category} onChange={handleChange} />
                                            </div>
                                            <div class="form-group col-md-6 col-lg-6">
                                                <label for="title">Title</label>
                                                <input type="text" class="form-control mt-3 mb-3" id="title" placeholder="Enter title.." onChange={handleChange} value={payload.title} name='title' />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="question">Question</label>
                                            <input type="text" class="form-control mt-3 mb-3" name="question" id="question" placeholder="Enter question.." value={payload.question} onChange={handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="content">Content</label>
                                            <textarea type="text" class="form-control mt-3 mb-3" name='content' id="content" placeholder="Enter content.." value={payload.content} onChange={handleChange} />
                                        </div>
                                        
                                        <div class="form-group mb-3">
                                        <select class="form-select" aria-label="Default select example" value={payload.status} name='status' id="status" onChange={handleChange}>
                                          <option value={1}>Active</option>
                                          <option value={0}>Inactive</option>
                                        </select>
                                        </div>
                                        <button type="button" onClick={handleSubmit} class="btn btn-primary text-end float-end">Submit</button>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </main>

                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row text-muted">
                            <div class="col-6 text-start">
                                <p class="mb-0">
                                    <a class="text-muted" href="#"
                                        target="_blank"><strong>MPF</strong></a> &copy;
                                </p>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;

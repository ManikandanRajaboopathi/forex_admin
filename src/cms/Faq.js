import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react';
import userService from "../services/user.service";
import moment from 'moment/moment';
const Logo = require('../asset/img/logo-467x100.png');

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getFaq().then((res) => {
            if (res.status) {
                setUsers(res.data);
            } else {
                console.log("Data fetch failed!")
            }
        }).catch((e) => {
            console.error(e)
        })
    }, [])
    return (
        <div class="wrapper">
            <Sidebar />

            <div class="main">
                <Navbar />

                <main class="content">
                    <div class="container-fluid p-0">

                        <h1 class="h3 mb-3"><strong>Analytics</strong> FAQ</h1>


                        <div class="row">
                            <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                                <div class="card flex-fill">
                                    <div class="card-header flex justify-content-between">

                                        <h5 class="card-title mb-0">FAQ</h5>
                                        <button className='btn btn-primary text-end'>Add FAQ</button>
                                    </div>
                                    <table class="table table-hover table-responsive my-0">
                                        <thead>
                                            <tr>
                                                <th class="d-none d-xl-table-cell">Category</th>
                                                <th class="d-none d-xl-table-cell">Title</th>
                                                <th class="d-none d-md-table-cell">Question</th>
                                                <th class="d-none d-md-table-cell">Content</th>
                                                <th class="d-none d-md-table-cell">Created On</th>
                                                <th class="d-none d-md-table-cell">Last Modified</th>
                                                <th class="d-none d-md-table-cell">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users && users.map((data) =>
                                                <tr>
                                                    <td>{data && data.category}</td>
                                                    <td class="d-none d-xl-table-cell">{data && data.title}</td>
                                                    <td class="d-none d-xl-table-cell">{data && data.question && data.question.substring(0, 10)+ "..."}</td>
                                                    <td class="d-none d-md-table-cell">{data && data.content && data.content.substring(0, 20) + "..."}</td>
                                                    <td class="d-none d-md-table-cell">{data && moment(data.createdAt).format('lll')}</td>
                                                    <td class="d-none d-md-table-cell">{data && moment(data.updatedAt).format('lll')}</td>
                                                    <td class="d-none d-md-table-cell">
                                                        <div class="dropdown">
                                                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                                                </svg>
                                                            </button>
                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                <li><a class="dropdown-item" href="#">View</a></li>
                                                                <li><a class="dropdown-item" href="#">Edit</a></li>
                                                                <li><a class="dropdown-item bg-danger" href="#">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    {/* <td><span class="badge bg-success">{data.status}</span></td> */}
                                                </tr>
                                            )}
                                            
                                        </tbody>
                                    </table>
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

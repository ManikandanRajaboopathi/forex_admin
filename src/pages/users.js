import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react';
import userService from "../services/user.service";

const Logo = require('../asset/img/logo-467x100.png');

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getUserList().then((res) => {
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

                        <h1 class="h3 mb-3"><strong>Analytics</strong> Users</h1>


                        <div class="row">
                            <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                                <div class="card flex-fill">
                                    <div class="card-header">

                                        <h5 class="card-title mb-0">Users</h5>
                                    </div>
                                    <table class="table table-hover table-responsive my-0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th class="d-none d-xl-table-cell">E-Mail</th>
                                                <th class="d-none d-xl-table-cell">Phone</th>
                                                <th class="d-none d-md-table-cell">Phase</th>
                                                <th class="d-none d-md-table-cell">Account Balance</th>
                                                <th class="d-none d-md-table-cell">Account Size</th>
                                                <th class="d-none d-md-table-cell">Average Win</th>
                                                <th class="d-none d-md-table-cell">Average Loss</th>
                                                <th>Win Ratio</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users && users.map((data) =>
                                                <tr>
                                                    <td>{data.first_name + " " + data.last_name}</td>
                                                    <td class="d-none d-xl-table-cell">{data.email}</td>
                                                    <td class="d-none d-xl-table-cell">{data.phonenumber}</td>
                                                    <td class="d-none d-md-table-cell">{data.phase}</td>
                                                    <td class="d-none d-md-table-cell">{data.account_balance}</td>
                                                    <td class="d-none d-md-table-cell">{data.account_size}</td>
                                                    <td class="d-none d-md-table-cell">{data.avg_win}</td>
                                                    <td class="d-none d-md-table-cell">{data.avg_loss}</td>
                                                    <td class="d-none d-md-table-cell">{data.win_ratio}</td>
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
                                            <tr>
                                                <td>Project Fireball</td>
                                                <td class="d-none d-xl-table-cell">01/01/2021</td>
                                                <td class="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span class="badge bg-danger">Cancelled</span></td>
                                                <td class="d-none d-md-table-cell">William Harris</td>
                                            </tr>
                                            <tr>
                                                <td>Project Hades</td>
                                                <td class="d-none d-xl-table-cell">01/01/2021</td>
                                                <td class="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span class="badge bg-success">Done</span></td>
                                                <td class="d-none d-md-table-cell">Sharon Lessman</td>
                                            </tr>
                                            <tr>
                                                <td>Project Nitro</td>
                                                <td class="d-none d-xl-table-cell">01/01/2021</td>
                                                <td class="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span class="badge bg-warning">In progress</span></td>
                                                <td class="d-none d-md-table-cell">Vanessa Tucker</td>
                                            </tr>
                                            <tr>
                                                <td>Project Phoenix</td>
                                                <td class="d-none d-xl-table-cell">01/01/2021</td>
                                                <td class="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span class="badge bg-success">Done</span></td>
                                                <td class="d-none d-md-table-cell">William Harris</td>
                                            </tr>
                                            <tr>
                                                <td>Project X</td>
                                                <td class="d-none d-xl-table-cell">01/01/2021</td>
                                                <td class="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span class="badge bg-success">Done</span></td>
                                                <td class="d-none d-md-table-cell">Sharon Lessman</td>
                                            </tr>
                                            <tr>
                                                <td>Project Romeo</td>
                                                <td class="d-none d-xl-table-cell">01/01/2021</td>
                                                <td class="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span class="badge bg-success">Done</span></td>
                                                <td class="d-none d-md-table-cell">Christina Mason</td>
                                            </tr>
                                            <tr>
                                                <td>Project Wombat</td>
                                                <td class="d-none d-xl-table-cell">01/01/2021</td>
                                                <td class="d-none d-xl-table-cell">31/06/2021</td>
                                                <td><span class="badge bg-warning">In progress</span></td>
                                                <td class="d-none d-md-table-cell">William Harris</td>
                                            </tr>
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

import { Link, Navigate } from 'react-router-dom'
const Logo = require('../asset/img/logo-467x100.png')
const profileImg = require('../asset/img/avatars/avatar.jpg')

function App () {
  const page =
    window.location.href.split('/')[window.location.href.split('/').length - 1]
  return (
    <nav id='sidebar' class='sidebar js-sidebar'>
      <div class='sidebar-content js-simplebar'>
        <a class='sidebar-brand' href='index.html'>
          <span class='align-middle'>
            <img src={Logo} alt='logo' class='img-fluid' />
          </span>
        </a>

        <ul class='sidebar-nav'>
          <li class='sidebar-header'>Pages</li>

          <li class={`sidebar-item ${page == 'dashboard' ? 'active' : ''}`}>
            <Link class='sidebar-link' to='/dashboard'>
              <i class='align-middle' data-feather='sliders'></i>{' '}
              <span class='align-middle'>Dashboard</span>
            </Link>
          </li>

          <li class={`sidebar-item ${page == 'profile' ? 'active' : ''}`}>
            <Link class='sidebar-link' to='/profile'>
              <i class='align-middle' data-feather='user'></i>{' '}
              <span class='align-middle'>Profile</span>
            </Link>
          </li>

          <li class={`sidebar-item ${page == 'users' ? 'active' : ''}`}>
            <Link class='sidebar-link' to='/users'>
              <i class='align-middle' data-feather='log-in'></i>{' '}
              <span class='align-middle'>Users</span>
            </Link>
          </li>
          <li class='dropdown sidebar-item'>
            <a
              href='javascript:void(0)'
              class='dropdown-toggle sidebar-link '
              data-toggle='dropdown'
            >
              CMS <span class='caret'></span>
            </a>
            <li class={`sidebar-item ${page == 'privacy_policy' ? 'active' : ''}`}>
              <Link class='sidebar-link' to='/privacy_policy'>
                <i class='align-middle' data-feather='log-in'></i>{' '}
                <span class='align-middle'>Privacy Policy</span>
              </Link>
            </li>
            <li class={`sidebar-item ${page == 'terms_condition' ? 'active' : ''}`}>
              <Link class='sidebar-link' to='/terms_condition'>
                <i class='align-middle' data-feather='log-in'></i>{' '}
                <span class='align-middle'>Terms and Condition</span>
              </Link>
            </li>
            <li class={`sidebar-item ${page == 'faq' ? 'active' : ''}`}>
              <Link class='sidebar-link' to='/faq'>
                <i class='align-middle' data-feather='log-in'></i>{' '}
                <span class='align-middle'>Faq</span>
              </Link>
            </li>
            <ul class='dropdown-menu animated fadeInLeft' role='menu'>
              <div class='dropdown-header'>Dropdown heading</div>
              <li>
                <a href='#pictures'>Pictures</a>
              </li>
              <li>
                <a href='#videos'>Videeos</a>
              </li>
              <li>
                <a href='#awards'>Awards</a>
              </li>
            </ul>
          </li>

          {/* <li class='sidebar-item'>
            <a class='sidebar-link' href='pages-sign-up.html'>
              <i class='align-middle' data-feather='user-plus'></i>{' '}
              <span class='align-middle'>Sign Up</span>
            </a>
          </li> */}

          <li class='sidebar-item'>
            <a class='sidebar-link' href='pages-blank.html'>
              <i class='align-middle' data-feather='book'></i>{' '}
              <span class='align-middle'>Blank</span>
            </a>
          </li>

          <li class='sidebar-header'>Plugins & Addons</li>

          <li class='sidebar-item'>
            <a class='sidebar-link' href='charts-chartjs.html'>
              <i class='align-middle' data-feather='bar-chart-2'></i>{' '}
              <span class='align-middle'>Charts</span>
            </a>
          </li>

          <li class='sidebar-item'>
            <a class='sidebar-link' href='maps-google.html'>
              <i class='align-middle' data-feather='map'></i>{' '}
              <span class='align-middle'>Maps</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default App

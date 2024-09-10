import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import { toast } from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setisLoggedIn;
  return (
    <div className='flex gap-3 ml-5 mr-3'>
        <Link to='/' >
        <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-3 ml-5 mr-3'>
                <li>
                   <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/' >About</Link>
                </li>
                <li>
                    <Link to='/' >Contact</Link>
                </li>
            </ul>
        </nav>
        { /*Login - SignUp - Logout - Dashboard*/ }
        <div className='flex ml-5 mr-3 gap-3'>
           {!isLoggedIn &&
            <Link to='/login' >
                <button>Login</button>
            </Link>
           }
           {!isLoggedIn &&
            <Link to='/signup' >
                <button onClick={()=>{
                    setisLoggedIn(false)
                    toast.success('Logged out')
                }}>SignUp</button>
            </Link>
           }
           { isLoggedIn &&
            <Link to='/logout' >
                <button onClick={()=>{
                    setisLoggedIn(false)
                    toast.success('Logged out')
                }}>Logout</button>
            </Link>
           }
           {isLoggedIn && 
            <Link to='/dashboard' >
                <button>Dashhboard</button>
            </Link>
           }
        </div>
    </div>
  )
}
export default Navbar ;

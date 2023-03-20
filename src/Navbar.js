import React from 'react'
import './Navbar.css'
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.1s linear;
          width: 100%;
          position: fixed;
          z-index: 2000;
          background-color: #0000004e;
          padding: 5px;
        }
        .scrollNav {
          transition: all 0.5s ease-in;
          z-index: 2000;
          background: #ffffff;
          width: 100%;
          border-bottom: 1px solid #dddddd;
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    )
  }
  return (
    <div>
    <div className='topCont'>
        {style()}
      <StickyNav style={{margin: 0,}}>
      <div className='navbar'>
        <div className="header__search">
            <SearchIcon className="header__searchIcon" style={{fontSize: 30,}} />
            <input className="header__searchInput" placeholder="Search here" type="text" />
        </div>

        <div className="header__nav">
            <Link to="/login" style={{textDecoration:'none'}}>
            <div className="header__option">
            LogIn
            </div>
            </Link>
            <Link to="/signup" style={{textDecoration:'none'}}>
            <div className="header__option">
                SignUp
                </div> 
            </Link>
            
        </div>
      </div>      
      </StickyNav>
        <div className="line1">
            Learn Without
        </div>
        <div className="line2">
            Limits
        </div>  

      </div>
    </div>
  )
}

export default Navbar
import React from 'react';
import CachedIcon from '@material-ui/icons/Cached';
import Refresh from '../assets/refresh.svg';
function Header({ onClick }) {
  return (
    <header>
      <nav className='nav'>
        <div></div>
        {/* <Fab onClick={onClick} className='icon-container'>
          <span>Random</span> <CachedIcon />
        </Fab> */}
        <button onClick={onClick} className='icon-container'>
          <span>Random</span> <img className='refresh' src={Refresh} />{' '}
        </button>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import { Link,useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Header({backButton}) {
    const history = useHistory();
    return (
        // BEM
        <div className='header'>
            {backButton ? (
                <IconButton onClick={()=>history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize='large' className='header__icon'/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize='large' className='header__icon'/>
                </IconButton>
            )}
            <Link to='/'>
                <img
                    className='header__logo'
                    src='https://cdn-icons-png.flaticon.com/512/2585/2585175.png'
                    alt='Tinder Logo'></img>
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon fontSize='large' className='header__icon'/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
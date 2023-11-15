import React from 'react'
import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'
// import icon from './../assets/aquarius.svg'
export default function NavBar() {

  
  return (
    <>
    <div className={classes.container}>
      <div className={classes.logo}></div>
        <ul className={classes.ul}>
          <span className={classes.span}><li><Link to="/">Home</Link></li></span>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      <div className={classes['button_container']}>
        <li className={classes.btn}>Login
        <div className={classes.dropdown}>
        <ul>
          <li><Link to="/signup">signup as Student</Link></li>
          <li><Link to="/login">Login as Student</Link></li>
          </ul>
        </div></li>
        </div>
      </div>
    </>
  )
}

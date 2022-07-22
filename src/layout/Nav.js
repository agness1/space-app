import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';

const Nav = (props) => {
  
const [menu, setMenu] = useState(false)

const hamburgerHandler = () => {

setMenu(true)

}

const closeHandler = () => {

setMenu(false)


}
    

return (
    <Fragment>
        <span onClick={hamburgerHandler} className={classes.hamburger}> <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#8a2be2" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>   </span>
       
      { !!menu &&  <nav className={classes.nav}>
         <span onClick={closeHandler} className={classes.close}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#8a2be2" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg></span>
            <ul>
        
                        <li><NavLink to="/Start"  className={(navData) => (navData.isActive ? classes.active : '')} >Start</NavLink></li>
        
        
              
                <li><NavLink to="/Rockets" className={(navData) => (navData.isActive ? classes.active : '')} >Rockets</NavLink></li>
                <li><NavLink to="/Launches"  className={(navData) => (navData.isActive ? classes.active : '')}>Launches</NavLink></li>
            </ul>
        </nav>}
       
       
        <nav className={classes.navDesktop}>
       
            <ul>
        
                        <li><NavLink to="/Start"  className={(navData) => (navData.isActive ? classes.active : '')} >Start</NavLink></li>
        
        
              
                <li><NavLink to="/Rockets" className={(navData) => (navData.isActive ? classes.active : '')} >Rockets</NavLink></li>
                <li><NavLink to="/Launches"  className={(navData) => (navData.isActive ? classes.active : '')}>Launches</NavLink></li>
            </ul>
        </nav>
        <main>
            {props.children}
        </main>
    </Fragment>
)


}



















export default Nav
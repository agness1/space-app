import classes from './RocketsInfo.module.css'
import { Fragment } from 'react'
const RocketInfo = (props) => {
const img = props.img
return (
    
<Fragment>
    <div className={classes.specification}>
        <div className={classes.details}>
            <p className={classes.pInfo}>Name: {props.name}</p>
            <p className={classes.pInfo}>First Flight: {props.firstFlight}</p>
            <p className={classes.pInfo}>Cost per launch: {props.cost}$</p>
            <p className={classes.pInfo}>Height: {props.height}m</p>
            <p className={classes.pInfo}>Mass: {props.mass}kg</p>
       </div>
   
        <img src={img} className={classes.picture} alt="rocket"></img> 
         
  </div>
        <div className={classes.description}><p>{props.description}</p></div>
    
    
    
    
</Fragment>
    
    
  
)

}
















export default RocketInfo
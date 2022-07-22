import React from "react"
import classes from './LaunchesData.module.css'
import { Fragment } from "react"

const LaunchesData = (props) => {

const data = new Date(props.date)
const hour = data.getHours()
const minutes = data.getMinutes()
const picture = props.picture

const launchDate = data.toLocaleDateString()

    return (
        
         <Fragment>
             
              <section className={classes.launchcontainer}>
             <h2>Next Launch</h2>
                <div className={classes.launchData}>
                    <p>Name: {props.name}</p>
                    <p>Date: {`${launchDate}`} </p>
                    <p>Time: {`${hour}:${minutes}`}</p>
                    <p>Flight number: {props.flightNumber}</p>
             
                </div>
             
                  <img src={picture} className={classes.launchImg} alt="logo"></img>
             
              </section>
         </Fragment>
    )


}













export default LaunchesData
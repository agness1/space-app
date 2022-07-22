import LaunchesData from "./LaunchesData"
import React from "react"
import { Fragment } from "react"

const LaunchesList = (props) => {


    return (
       
           
           <Fragment>
                   
                   
                            {props.data.map((dataSpace) => (<LaunchesData
                            key={dataSpace.id}
                            date={dataSpace.date}
                            flightNumber={dataSpace.flightNumber}
                            name={dataSpace.name}
                   
                           picture={dataSpace.img}
                   
                            />))}
           </Fragment>
            
     
    )
        
    




}























export default LaunchesList
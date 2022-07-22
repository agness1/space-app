import SpaceData from "./InfoCompany";
import React from "react"
import { Fragment } from "react";


const SpaceDataList = (props) => {
return (
    <Fragment> 
       {props.dataSpace.map((dataSpace) => (
        <SpaceData
        key={dataSpace.id}
        name={dataSpace.name}
        founder={dataSpace.founder}
        founded={dataSpace.founded}
        employees={dataSpace.employees}
        vehicles={dataSpace.vehicles}
        launch_sites={dataSpace.launch_sites}
        test_sites={dataSpace.test_sites}
        summary={dataSpace.summary}
       
        />
      ))}
            
        

    </Fragment>
)
}






export default SpaceDataList
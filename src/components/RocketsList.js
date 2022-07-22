import classes from "./RocketsInfo.module.css"

import RocketInfo from "./RocketsInfo"
const RocketList = (props) => {

  
 return (
    <section className={classes.container}>
    {props.data.map((dataSpace) => (
     <RocketInfo
     name={dataSpace.name}
     cost={dataSpace.cost}
     firstFlight={dataSpace.firstFlight}
     height={dataSpace.height}
     mass={dataSpace.mass}
     img={dataSpace.img}
     description={dataSpace.description}
    
     />
   ))}
        
 

 </section>
 )

}















export default RocketList
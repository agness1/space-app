import RocketList from "../components/RocketsList"
import useHttp from "../hooks/use-http"

const Rockets = () => {
    const { loading, data } = useHttp('https://api.spacexdata.com/v4/rockets')

    if(loading) return <h1>Loading...</h1>
    JSON.stringify(data)
    console.log(data)
    //console.log(data[1,2,3].name)


const spaceData = data.map(dataSpace => {
    return (
        {
            name: dataSpace.name,
            cost: dataSpace.cost_per_launch,
            description: dataSpace.description,
            firstFlight: dataSpace.first_flight,
            height: dataSpace.height.meters,
            mass: dataSpace.mass.kg,
            img: dataSpace.flickr_images

        }
        
    )
})
console.log(spaceData)
    
  
    
    return(  <RocketList data={spaceData}/>)
    
    
}
























export default Rockets
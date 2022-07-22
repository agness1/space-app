import LaunchesList from "../components/LaunchesDataList"
import useHttp from "../hooks/use-http"

const Launches = () => {

const { loading: sending, data: nextData } = useHttp('https://api.spacexdata.com/v5/launches/next')

if(sending) return <h1>Loading...</h1>
JSON.stringify(nextData)
console.log(nextData)
const nextLaunchData = [{
         id: Math.random().toString(20),
         date: nextData.date_utc,
         flightNumber: nextData.flight_number,
         name: nextData.name,
         img: nextData.links.patch.small
        
         
     
       
       
      }]


console.log(nextData.date_utc)

return(  <LaunchesList data={nextLaunchData}/>)



}



























export default Launches
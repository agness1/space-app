
import useHttp from '../hooks/use-http';
import React from 'react';
import { Fragment } from 'react';
import SpaceDataList from "../components/InfoCompanyList";
import Header from '../components/Header';


const Start = () => {

  const { loading, data } = useHttp('https://api.spacexdata.com/v4/company')

  if(loading) return <h1>Loading....</h1>
JSON.stringify(data)

const spaceData = [{
           id: data.id,
          name: data.name,
         founder: data.founder,
         founded: data.founded,
         employees: data.employees,
         vehicles: data.vehicles,
         launch_sites: data.launch_sites,
         test_sites: data.test_sites,
         summary: data.summary
        }]

  console.log(spaceData)
return ( 
          
            <Fragment>
              <Header></Header>
              <SpaceDataList dataSpace={spaceData}/>
              

            </Fragment>
  )
       
 











}







export default Start
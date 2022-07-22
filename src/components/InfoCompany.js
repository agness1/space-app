
import classes from "./InfoCompany.module.css"
const SpaceData =  (props) => {

    return (
        <section className={classes.info}>
        <div className={classes.details}>
          <div className={classes.details_border}><p className={classes.pDetail}> {props.name}</p></div>
          <div className={classes.details_border}><p>Founder: {props.founder}</p></div>
          <div className={classes.details_border}><p>Founded: {props.founded}</p></div>
          <div className={classes.details_border}><p>Employees: {props.employees}</p></div>
          <div className={classes.details_border}><p>Vehicles: {props.vehicles}</p></div>
          <div className={classes.details_border}><p>Launch sites: {props.launch_sites}</p></div>
          <div className={classes.details_border}><p>Test sites: {props.test_sites}</p></div>
        </div>
        <div className={classes.summary}><p>{props.summary}</p></div>
      
      
      </section>
    )

}





















export default SpaceData
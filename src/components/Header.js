import classes from "./Header.module.css"
import { Fragment } from "react"

const Header = () => {

return (


<Fragment>
    
        <header className={classes.header}>
            <video src={require('../store/videos/falcon-video.mp4')}type="video/mp4" autoPlay loop playsInline className={classes.video}></video>
            <h1> Spacex :)</h1>
        </header>
</Fragment>
)


}











export default Header
import { Fragment } from 'react'
const Img = (props) => {

return (
    <Fragment>
        <p>{props.description}</p>
        <img src={require('../store/pictures/falcon 1.jpg')}></img>
        <img src={require('../store/pictures/falcon 9.png')}></img>
        <img src={require('../store/pictures/falcon heavy.jpg')}></img>
        <img src={require('../store/pictures/starship.png')}></img>
    </Fragment>
 
)

}


















export default Img
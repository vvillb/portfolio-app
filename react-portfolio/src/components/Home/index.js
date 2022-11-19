import LogoS from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom';
import './index.scss';
import Clock from './Clock';

const Home=()=>{
    let deadline="december, 05, 2022, 10:00"
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>En 
                
            </h1>
            <span className="clock"><Clock deadline={deadline}/></span> 
            <Link to="/Itinerary" className='flat-button'>VER ITINERARIO</Link>
            </div>
        </div>
    )
}

export default Home
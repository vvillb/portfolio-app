import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHome,faMapLocationDot,faListCheck,faHotel,faUtensils, faTrainSubway} from '@fortawesome/free-solid-svg-icons'

const Sidebar =()=>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="italia2022"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#7CB518"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="itinerary-link" to="/itinerary">
                <FontAwesomeIcon icon={faMapLocationDot} color="#7CB518"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="checklist-link" to="/checklist">
                <FontAwesomeIcon icon={faListCheck} color="#7CB518"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://secure.booking.com/myreservations.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaHGIAQGYAQm4ARfIAQzYAQHoAQH4AQOIAgGoAgO4AqSS1ZsGwAIB0gIkOGI0Mjg1NDktMWFiMS00YjdjLTg3MDctZDBmZjlmNjg3ZWVm2AIF4AIB&sid=2b87a47a116b8a14d9ae4c6a2203396a&tmpl=profile%2Fdashboard_mybookings&source=profile_menu"
                    >
                    <FontAwesomeIcon icon={faHotel} color="#7CB518"/>
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://maps.app.goo.gl/4CTL1LndHKPNTUti9?g_st=iw"
                    >
                    <FontAwesomeIcon icon={faUtensils} color="#7CB518"/>
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.trenitalia.com/"
                    >
                    <FontAwesomeIcon icon={faTrainSubway} color="#7CB518"/>
                </a>
            </li>
        </ul>
     </div>
)

export default Sidebar
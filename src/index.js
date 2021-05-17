import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAndroid, fab, faMedapps } from '@fortawesome/free-brands-svg-icons'
import { StatePlayContext } from './contexts/PlayContext'
import {
  faPhoneAlt,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
  faKey,
  faCertificate,
  faCode,
  faLaptopCode,
  faBell,
  faSun,
  faMoon,
  faLayerGroup,
  faUserCircle,
  faSignOutAlt,
  faHeadset,
  faHeart,
  faThumbsUp,
  faCalendarAlt,
  faQuoteLeft,
  faQuoteRight,
  faAward,
  faUsers,
  faChalkboardTeacher,
  faHatWizard,
  faHandshake,
  faAngleUp,
  faInfoCircle,
  faEdit,
  faTrashAlt,
  faPlusCircle,
  faFilter,
  faMoneyCheck,
  faUserCheck,
  faUserClock,
  faUserMinus,
  faUserShield,
  faCashRegister,
  faPencilAlt,
  faCheckCircle,
  faReceipt,
  faPrint,
  faLightbulb,
  faRocket,
  faGraduationCap,
  faHandsHelping,
  faArrowCircleLeft,
  faNetworkWired
}
  from '@fortawesome/free-solid-svg-icons'
import { StateUserContext } from './contexts/UserContext';

library.add(fab,
  faPencilAlt,
  faRocket,
  faReceipt,
  faGraduationCap,
  faLightbulb,
  faPrint,
  faCheckCircle,
  faMoneyCheck,
  faCashRegister,
  faUserShield,
  faUserMinus,
  faMedapps,
  faUserCheck,
  faUserClock,
  faBell,
  faFilter,
  faPlusCircle,
  faTrashAlt,
  faEdit,
  faInfoCircle,
  faAngleUp,
  faHandshake,
  faHatWizard,
  faChalkboardTeacher,
  faAward,
  faUsers,
  faQuoteLeft,
  faQuoteRight,
  faMobileAlt,
  faThumbsUp,
  faCalendarAlt,
  faSun,
  faMoon,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faKey,
  faLayerGroup,
  faCertificate,
  faCode,
  faLaptopCode,
  faLayerGroup,
  faUserCircle,
  faSignOutAlt,
  faHeadset,
  faHeart,
  faAndroid,
  faHandsHelping,
  faArrowCircleLeft,
  faNetworkWired
)

ReactDOM.render(
  <React.StrictMode>
    <StateUserContext>
      <StatePlayContext>
        <App />
      </StatePlayContext>
    </StateUserContext>
  </React.StrictMode>,
  document.getElementById('root')
);

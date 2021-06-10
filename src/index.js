import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAndroid, fab, faMedapps } from '@fortawesome/free-brands-svg-icons'
import { StatePlayContext } from './contexts/PlayContext'
import { StateAuthContext } from './contexts/AuthContext'
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
  faNetworkWired,
  faFrown,
  faAngleDown,
  faTachometerAlt,
  faUserFriends,
  faUserGraduate
}
  from '@fortawesome/free-solid-svg-icons'
import { StateUserContext } from './contexts/UserContext';
import { StateAllContext } from './contexts/AllContexts';
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
  faNetworkWired,
  faFrown,
  faAngleDown,
  faTachometerAlt,
  faUserFriends,
  faUserGraduate
)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateAuthContext>
        <StateAllContext>
          <StatePlayContext>
            <App />
          </StatePlayContext>
        </StateAllContext>
      </StateAuthContext>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAndroid, fab } from '@fortawesome/free-brands-svg-icons'
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
  faFilter
}
  from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartFar } from '@fortawesome/free-regular-svg-icons';

library.add(fab,
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
)

ReactDOM.render(
  <React.StrictMode>
    <StatePlayContext>
      <App />
    </StatePlayContext>

  </React.StrictMode>,
  document.getElementById('root')
);

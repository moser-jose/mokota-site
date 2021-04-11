import React from 'react';
import { animateScroll as top } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const tapToTop = () =>
    <div className="btn-top" onClick={() => top.scrollToTop()}>
       <FontAwesomeIcon icon="angle-up" />
    </div>

export default tapToTop;


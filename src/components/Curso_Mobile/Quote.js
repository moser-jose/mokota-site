import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Quote() {
    return (
        <div className="quote">
            <p><span> <FontAwesomeIcon icon="quote-left" /> Forme-se com o pensamento de que conhecimento é poder. <FontAwesomeIcon icon="quote-right" /></span></p>
            <p className="autor">- Moser José, CEO</p>
        </div>
    )
}

export default Quote

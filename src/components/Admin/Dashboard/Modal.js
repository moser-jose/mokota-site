import React from 'react'
function Modal({ children, modal }) {
    return (
        <>
            <div className="modal" onClick={modal}>
                <div className="modal-corpo">
                    <span className="close" onClick={modal}>+</span>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Modal

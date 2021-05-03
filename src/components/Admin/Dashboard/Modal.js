import React from 'react'
function Modal({ children, modal, height, width }) {
    return (
        <>
            <div className="modal" onClick={modal}>
                <div className="modal-corpo" style={{ width: width, height: height }}>
                    <span className="close" onClick={modal}>+</span>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Modal

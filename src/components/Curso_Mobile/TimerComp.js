import React from 'react'
function TimerComp({ countdown, unixEndDate }) {
    return (
        <div className="grid-en-2">
            <h4>Faltam apenas</h4>
            <div className="cont">
                <div>
                    <span>{countdown.days}</span>
                    <p>Dias</p>
                </div>
                <div><span>{countdown.hours}</span>
                    <p>Horas</p></div>
                <div><span>{countdown.mins}</span>
                    <p>Min</p></div>
                <div><span>{countdown.secs}</span>
                    <p>Seg</p></div>
            </div>

            <h3>O curso Iniciará no dia 28 de Abril de 2021 às 8:00 horas</h3>

        </div>
    )
}

export default TimerComp

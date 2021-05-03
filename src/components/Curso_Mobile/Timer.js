import React, { useState, useEffect } from 'react';
import moment from 'moment';
import TimerComp from './TimerComp'

const Timer = () => {
  const dateValue = '08-21-2021';
  const timeValue = '08:00';
  const ampmValue = 'am';

  const [countdown, SetCountdown] = useState({
    days: '',
    hours: '',
    mins: '',
    secs: ''
  });
  const [timer, SetTimer] = useState(null);
  const [countDownDate,] = useState({
    dateValue: dateValue,
    timeValue: timeValue,
    ampmValue: ampmValue,
    unixEndDate: '',
  });

  const [countDownDate1,] = useState({
    dateValue: dateValue,
    timeValue: timeValue,
    ampmValue: ampmValue,
    unixEndDate: Number(moment(`${dateValue} ${timeValue} ${ampmValue}`, 'MM-DD-YYYY hh:mm A').format('X')),
  });

  const renderCountdownDate = (countDownDate) => {

    countDownDate ? localStorage.setItem('countDownDate', JSON.stringify(countDownDate)) : localStorage.setItem('countDownDate', JSON.stringify(countDownDate1));

    return JSON.parse(localStorage.getItem('countDownDate')) || this.countDownDate;
  }
  const handleSubmit = (dateValue, timeValue, ampmValue) => {

    const unixEndDate = Number(moment(`${dateValue} ${timeValue} ${ampmValue}`, 'MM-DD-YYYY hh:mm A').format('X'));

    startCountdown(renderCountdownDate({
      dateValue,
      timeValue,
      ampmValue,
      unixEndDate
    }));
  }

  const startCountdown = (endDate) => {
    clearInterval(timer);
    SetTimer(null);

    if (endDate.unixEndDate !== '') {
      SetTimer(setInterval(() => playTimer(endDate.unixEndDate), 1000));
    }
  }

  const playTimer = (unixEndDate) => {
    const distance = unixEndDate - moment().format('X');

    if (distance > 0) {
      SetCountdown({
        days: parseInt(distance / (60 * 60 * 24), 10),
        hours: parseInt(distance % (60 * 60 * 24) / (60 * 60), 10),
        mins: parseInt(distance % (60 * 60) / (60), 10),
        secs: parseInt(distance % 60, 10)
      })
    }
    else {
      clearInterval(timer);
      SetTimer(null);
      renderCountdownDate(countDownDate);

    }
  }
  useEffect(() => {
    handleSubmit('08-21-2021', '08:00', 'am');
  }, []);
  return (
    <React.Fragment>
      <TimerComp countdown={countdown} unixEndDate={renderCountdownDate().unixEndDate} />
    </React.Fragment>
  );
}

export default Timer;

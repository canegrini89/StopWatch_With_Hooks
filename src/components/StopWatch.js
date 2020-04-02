import React from 'react';
import { useStopWatch } from './customHooks';
import LapList from './LapList';

const StopWatch = () => {
  const {
    elapsedTime,
    startTimer,
    stopTimer,
    isRunning,
    resetTimer,
    addLap,
    laps
  } = useStopWatch();

  const formatTimeOutput = time => {
    const splitTime = time.split('.');
    let miliseconds = splitTime[1];
    let seconds = splitTime[0];
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(seconds / 3600);

    seconds -= hours * 3600;
    seconds -= minutes * 60;

    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    return `${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
  };

  const handleStartStop = () => {
    isRunning ? stopTimer() : startTimer();
  };

  const handleLapReset = () => {
    isRunning ? addLap() : resetTimer();
  };

  return (
    <div className='wrapper'>
      <h1 className='display'>{formatTimeOutput(elapsedTime)}</h1>
      <div className='button_wrapper'>
        <button
          className={isRunning ? 'stop_button' : 'start_button'}
          onClick={handleStartStop}
        >
          {isRunning ? 'STOP' : 'START'}
        </button>
        <button
          className={isRunning ? 'lap_button' : 'reset_button'}
          onClick={handleLapReset}
        >
          {isRunning ? 'LAP' : 'RESET'}
        </button>
      </div>
      {laps.length > 0 && <LapList laps={laps} />}
    </div>
  );
};

export default StopWatch;

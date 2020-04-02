import React from 'react';
import { useStopWatch } from './customHooks';

const StopWatch = () => {
  const { elapsedTime, startTimer } = useStopWatch();

  const formatTimeOutput = time => {
    let hr = 0;
    let min = 0;
    let sec = 0;
    const newTime = time.split('.');

    // Hace con cuentas de division y calcular el resto para poder meterlo en condicionales y poder sacar el 00 de cada una de las operaciones

    console.log(min, sec);
  };

  return (
    <div>
      <h1>{formatTimeOutput(elapsedTime)}</h1>
      <button onClick={() => startTimer()}>Start</button>
      {/* Agregar los restantes botones y los laps */}
    </div>
  );
};

export default StopWatch;

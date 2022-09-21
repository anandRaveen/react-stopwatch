import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const StopWatch = () => {
  const [time, SetTime] = useState({ m: 0, s: 0, ms: 0 });

  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const onStartHandle = () => {
    setIsStarted(true);
    setIsPaused(false);
  };

  const onPauseHandle = () => {
    setIsPaused(true);
  };
  const onResetHandle = () => {
    SetTime({ m: 0, s: 0, ms: 0 });
    setIsStarted(false);
  };

  useEffect(() => {
    let Interval = null;
    if (isStarted === true && isPaused === false) {
      Interval = setInterval(() => {
        if (time.ms < 59) {
          SetTime((prevState) => ({ ...prevState, ms: prevState.ms + 1 }));
        }

        if (time.ms >= 59) {
          SetTime((prevState) => ({ ...prevState, ms: 0, s: prevState.s + 1 }));
        }

        if (time.s >= 59)
          SetTime((prevState) => ({
            ...prevState,
            s: 0,
            m: prevState.m + 1
          }));
      }, 100);
    }
    return () => clearInterval(Interval);
  });

  return (
    <Container className=" w-50 mt-5">
      <div className="d-flex shadow flex-row text-secondary mb-4 justify-content-center bg-light border rounded">
        <div className="p-2">
          {time.m < 99 ? (
            <span className="p-0 m-0">0{time.m}</span>
          ) : (
            <span>{time.m}</span>
          )}
        </div>
        <div className="p-2 ">:</div>
        <div className="p-2 ">
          {time.s < 10 ? (
            <span className="p-0 m-0">0{time.s}</span>
          ) : (
            <span>{time.s}</span>
          )}
        </div>
        <div className="p-2 ">:</div>
        <div className="p-2 ">
          {time.ms < 10 ? (
            <span className="p-0 m-0">0{time.ms}</span>
          ) : (
            <span>{time.ms}</span>
          )}
        </div>
      </div>
      <div className="d-flex flex-row  mb-3 justify-content-center ">
        <div className="p-2 ">
          <button className=" btn btn-primary" onClick={onStartHandle}>
            Start
          </button>
        </div>
        <div className="p-2 ">
          <button className=" btn btn-primary" onClick={onPauseHandle}>
            Stop
          </button>
        </div>
        <div className="p-2 ">
          <button className=" btn btn-primary" onClick={onResetHandle}>
            Reset
          </button>
        </div>
      </div>
    </Container>
  );
};

export default StopWatch;

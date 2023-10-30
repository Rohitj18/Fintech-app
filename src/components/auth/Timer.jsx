import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";

const CountdownTimer = ({ totalSec ,func}) => {
  const countRef = useRef("");
  const [restart, setRestart] = useState(true);
  const [timee, setTime] = useState(Date.now() + totalSec);

  const resendVerificationCode = (e, apiii) => {
    e.preventDefault();
    setTime(Date.now() + totalSec);
  };

  const renderer = ({ hours, minutes, seconds, completed, api }) => {
    if (completed) {
      return (
        <div className="inline-block">
          <a  href="/#" onClick={(e) => resendVerificationCode(e, api)}>Resend</a>
        </div>
      );
    } else {
      return (
        <div className="inline-block">
          <span>{seconds > 9 ? seconds : `0 ${seconds}`}</span>
        </div>
      );
    }
  };

  useEffect(() => {
    if (restart) {
      countRef?.current?.start();
    }
  }, [restart, timee]);

  return (
    <Countdown
      date={timee}
      renderer={renderer}
      autoStart={false}
      ref={countRef}
    ></Countdown>
  );
};

export default CountdownTimer;

import { useState, useEffect, useRef } from "react";
import { setMinutes, playOrPauseTimer, resetTimer } from "handlers/timer-controls";
import { Timer, Interval, InputEvent } from "types/timer";

const initialState: Timer = {
  minutes: 1,
  seconds: 0,
  isPaused: true,
  reset: false,
};

export default function useTimer() {
  const [timer, setTimer] = useState<Timer>(initialState);
  const alarmRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let interval: Interval = null;

    if (timer.isPaused) typeof interval === "number" && clearInterval(interval);
    else
      interval = setInterval(() => {
        setTimer((prevState: Timer) => {
          if (prevState.minutes === 0 && prevState.seconds === 0) {
            typeof interval === "number" && clearInterval(interval);
            return initialState;
          }

          if (prevState.seconds > 0 && prevState.seconds <= 59)
            return {
              ...prevState,
              seconds: prevState.seconds - 1,
            };
          else if (prevState.seconds === 0)
            return {
              ...prevState,
              minutes: prevState.minutes - 1,
              seconds: 59,
            };
          else return prevState;
        });
      }, 1000);

    return () => {
      typeof interval === "number" && clearInterval(interval);
    };
  });

  useEffect(() => {
    const alarm = alarmRef.current;
    if (timer.minutes === 0 && timer.seconds === 0 && alarm !== null) alarm.play();
  });

  useEffect(() => {
    if (timer.reset) setTimer(initialState);
  }, [timer.reset]);

  return {
    timer,
    alarmRef,
    setMinutes: (e: InputEvent) => setMinutes(e, setTimer),
    playOrPauseTimer: () => playOrPauseTimer(setTimer),
    resetTimer: () => resetTimer(setTimer),
  };
}

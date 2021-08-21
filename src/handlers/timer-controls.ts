import { Timer, SetTimer, InputEvent } from "types/timer";

export function setMinutes(e: InputEvent, setTimer: SetTimer) {
  const { value } = e.target;

  setTimer((prevState: Timer) => {
    return {
      ...prevState,
      minutes: parseInt(value),
    };
  });
}

export function playOrPauseTimer(setTimer: SetTimer) {
  setTimer((prevState: Timer) => {
    return {
      ...prevState,
      isPaused: !prevState.isPaused,
    };
  });
}

export function resetTimer(setTimer: SetTimer) {
  setTimer((prevState: Timer) => {
    return {
      ...prevState,
      reset: true,
    };
  });
}

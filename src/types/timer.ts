import { Dispatch, RefObject, SetStateAction } from "react";

export type Timer = {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  reset: boolean;
};

export type UseTimer = {
  timer: Timer;
  alarmRef: RefObject<HTMLAudioElement>;
  setMinutes: (e: InputEvent) => void;
  playOrPauseTimer: () => void;
  resetTimer: () => void;
};

export type TimerDisplayProps = {
  timer: Timer;
};
export type TimerControlsProps = {
  timer: Timer;
  handlers: {
    setMinutes: (e: InputEvent) => void;
    playOrPauseTimer: () => void;
    resetTimer: () => void;
  };
};
export type Interval = null | number | ReturnType<typeof setInterval>;
export type SetTimer = Dispatch<SetStateAction<Timer>>;
export type InputEvent = React.ChangeEvent<HTMLInputElement>;

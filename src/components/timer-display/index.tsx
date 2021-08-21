import { formatMinutes, formatSeconds } from "utils/format-time";
import { TimerDisplayProps } from "types/timer";
import "./styles.css";

export default function TimerDisplay({ timer }: TimerDisplayProps) {
  const { minutes, seconds } = timer;

  return (
    <>
      <div className="timer-display">
        <span className="minutes">{formatMinutes(minutes)}</span>
        <span className="colon">:</span>
        <span className="seconds">{formatSeconds(seconds)}</span>
      </div>
    </>
  );
}

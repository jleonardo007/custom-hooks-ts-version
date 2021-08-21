import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faRedo, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { InputEvent, TimerControlsProps } from "types/timer";
import "./styles.css";

export default function TimerControls({ timer, handlers }: TimerControlsProps) {
  const { minutes, isPaused } = timer;
  const { setMinutes, playOrPauseTimer, resetTimer } = handlers;

  return (
    <div className="timer-controls">
      <div className="minutes-input">
        <input
          type="number"
          min={1}
          value={minutes}
          placeholder="Minutes"
          onChange={(e: InputEvent) => setMinutes(e)}
        />
      </div>
      <div className="timer-buttons">
        <button
          className="play-pause-button"
          onClick={playOrPauseTimer}
          title={isPaused ? "Init timer" : "Pause"}
        >
          {isPaused ? (
            <FontAwesomeIcon icon={faPlayCircle} />
          ) : (
            <FontAwesomeIcon icon={faPauseCircle} />
          )}
        </button>
        <button className="reset-button" onClick={resetTimer} title="Reset timer">
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>
    </div>
  );
}

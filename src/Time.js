import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const Time = ({ timeLeft, onClickPlay, onClickPause, onClickReset, isSession, timerColor }) => {
  // Get minutes and seconds from timeLeft
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  // Renders to the browser if the current interval is session or break
  let currentInterval = '';
  if (isSession){
    currentInterval = 'Session';
  }
  else{
    currentInterval = 'Break';
  }

  // Changes class based on timerColor
  let classTimerColor = timerColor === 'black' ? 'normal-color' : 'alert-color';

  return(
    <div id="time-container">
      <div id="timer">
          <div id="timer-label" className={classTimerColor}>{currentInterval}</div>
          <div id="timer-left" className={classTimerColor}>
            {/* First conditional statement was put to avoid showing negative numbers
            on the screen for a split second when switching between session and break */}
            {minutes < 0 ? 0 : minutes < 10 ? '0' + minutes : minutes}
            :
            {seconds < 0 ? 0 : seconds < 10 ? '0' + seconds : seconds}
          </div>
        </div>

      <div id="time-control">
        <FontAwesomeIcon icon={faPlay} id="start-stop" onClick={onClickPlay} />
        <FontAwesomeIcon icon={faPause} id="pause" onClick={onClickPause} />
        <FontAwesomeIcon icon={faSyncAlt} id="reset" onClick={onClickReset} />
      </div>
    </div>
  )
}

export default Time
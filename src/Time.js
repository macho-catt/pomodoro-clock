import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const Time = ({currentTime}) => {

  return(
    <div id="time-container">
      <div id="timer">
          <div id="timer-label" className="alert-color">Session</div>
          <div id="timer-left" className="alert-color">{currentTime}</div>
        </div>

      <div id="time-control">
        <FontAwesomeIcon icon={faPlay} id="start-stop" />
        <FontAwesomeIcon icon={faPause} id="pause" />
        <FontAwesomeIcon icon={faSyncAlt} id="reset" />
      </div>
    </div>
  )
}

export default Time
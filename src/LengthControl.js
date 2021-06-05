import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const LengthContainer = (props) => {

  return(
    <div id={props.container} className="length-container">
      <div id={props.labelId}>{props.labelValue}</div>
      <div className="length-control">
        <FontAwesomeIcon icon={faArrowDown} id={props.decrement} />
        <div id={props.lengthId}>{props.lengthValue}</div>
        <FontAwesomeIcon icon={faArrowUp} id={props.increment} />
      </div>
    </div>
  )
}

export default LengthContainer
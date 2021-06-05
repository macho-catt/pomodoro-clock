import React, { useState } from 'react'
import Time from './Time.js'
import LengthControl from './LengthControl.js'

const App = () => {
  const [currentTime, setCurrentTime] = useState(null);
  //need to use and learn date object

  return(
    <div id="container">
      <div id="clock-container">
        <div id="title">
          25 + 5 Clock
        </div>
        <LengthControl container="break-container" labelId="break-label" lengthId="break-length" increment="break-increment" decrement="break-decrement" labelValue="Break Length" lengthValue="5" />
        <LengthControl container="session-container" labelId="session-label" lengthId="session-length" increment="session-increment" decrement="session-decrement" labelValue="Session Length" lengthValue="5" />
        <Time currentTime={currentTime} />
      </div>
    </div>
  )
}

export default App
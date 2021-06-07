import React, { useState, useEffect, useRef } from 'react'
import Time from './Time.js'
import LengthControl from './LengthControl.js'
import soundfile from './ring.wav'

const App = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [play, setPlay] = useState(false);
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [isSession, setIsSession] = useState(true);
  const [timerColor, setTimerColor] = useState('black');
  const [audioClip, setAudioClip] = useState(null);

  let ref = useRef(0);

  // Decrement timeLeft by a second
  const decreaseTime = () => {
    setTimeLeft((prev) => prev - 1);
  }

  // Checks if the timer should count down based on the state of play
  const handleClickPlay = () => {
    // Countdown
    if (play){
      ref.current = setInterval(decreaseTime, 1000);
    }
    // Pause
    else{
      clearInterval(ref.current);
    }
    setPlay(!play);
  }

  const handleClickPause = () => {
    clearInterval(ref.current);
    setPlay(true);
  }

  // Reset everything to initial states
  const handleClickReset = () => {
    clearInterval(ref.current);
    setPlay(true);
    setBreakTime(5);
    setSessionTime(25);
    setTimeLeft(25 * 60);
    setIsSession(true);
    setTimerColor('black');
    audioClip.currentTime = 0;
  }

  const handleSessionIncrement = () => { 
    // Session time cannot be more than an hour
    if (sessionTime < 60){
      setSessionTime(sessionTime + 1);
    } 
  }

  const handleSessionDecrement = () => {
    // Session time cannot be less than a minute
    if (sessionTime > 1){
      setSessionTime(sessionTime - 1);
    }
  }

  const handleBreakIncrement = () => {
    // Break time cannot be more than an hour
    if (breakTime < 60){
      setBreakTime(breakTime + 1);
    }
  }

  const handleBreakDecrement = () => {
    // Break time cannot be less than a minute
    if (breakTime > 1){
      setBreakTime(breakTime - 1);
    }
  }

  // Play audio for 3 seconds
  const playAudio = () => {
    audioClip.play();
    setTimeout(() => {
      audioClip.pause();
    }, 3000)
  }

  // Initialize states
  useEffect(() => {
    setPlay(true);
    setIsSession(true);
    setTimeLeft(25);
    setAudioClip(document.getElementById("beep"));
  }, []);

  // Set timerLeft based on sessionTime or breakTime, whichever the current interval period is
  useEffect(() => {
    if (isSession){
      setTimeLeft(sessionTime * 60);
    }
    else {
      setTimeLeft(breakTime * 60);
    }
  }, [sessionTime, breakTime])

  // Effects to trigger based on remaining time
  useEffect(() => {
    // Switch to red color when timeLeft is 60 seconds or less
    if (timeLeft < 61){
      setTimerColor('red');
    }
    // Otherwise, color is black
    else {
      setTimerColor('black');
    }
    // Switch to break period
    if (timeLeft < 0 && isSession === true){
      setIsSession(!isSession);
      playAudio();
      setTimeLeft(breakTime * 60);
    }
    // Switch to session period
    else if (timeLeft < 0 && isSession === false){
      setIsSession(!isSession);
      playAudio();
      setTimeLeft(sessionTime * 60);
    }
  }, [timeLeft])

  return(
    <div id="container">
      <div id="clock-container">
        <div id="title">
          25 + 5 Clock
        </div>
        <LengthControl 
          container="break-container"
          labelId="break-label" 
          lengthId="break-length" 
          increment="break-increment" 
          decrement="break-decrement" 
          labelValue="Break Length" 
          lengthValue={breakTime} 
          onClickIncrement={handleBreakIncrement}
          onClickDecrement={handleBreakDecrement}
        />
        <LengthControl 
          container="session-container" 
          labelId="session-label" 
          lengthId="session-length" 
          increment="session-increment" 
          decrement="session-decrement" 
          labelValue="Session Length" 
          lengthValue={sessionTime}
          onClickIncrement={handleSessionIncrement}
          onClickDecrement={handleSessionDecrement}
        />
        <Time 
          timeLeft={timeLeft}
          isSession={isSession}
          onClickPlay={handleClickPlay} 
          onClickPause={handleClickPause}
          onClickReset={handleClickReset}
          timerColor={timerColor}
        />
        <audio id="beep" src={soundfile}></audio>
      </div>
    </div>
  )
}

export default App
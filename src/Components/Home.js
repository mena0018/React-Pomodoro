import "../Styles/css/Home.css"
import Play from "../Images/play.svg"
import Pause from "../Images/pause.svg"
import Reset from "../Images/reset.svg"
import {useState, useEffect, useReducer} from "react"


export default function Home() {

  const [sessionTime, setSessionTime] = useState(1500)
  const [sessionTimeFixed, setSessionTimeFixed] = useState(1500)

  const [breakTime, setBreakTime] = useState(300)
  const [breakTimeFixed, setBreakTimeFixed] = useState(300)

  const [chrono, setChrono] = useState(false)
  const [state, dispatch] = useReducer(reducer);
  

  useEffect(() => {
    let id;

    if (chrono) {
      id =  window.setInterval(() => {
        dispatch({ type: 'TICK' })
      }, 1000)
    }

    return () => {
      window.clearInterval(id)
    }

  }, [chrono])


  function reducer (state, action) {
    switch(action.type) {
      
      case 'TICK':
        if (sessionTime >= 0) {
          setSessionTime(sessionTime - 1)
        }
        else if (breakTime >= 1) {
          setBreakTime(breakTime - 1)
        }
        else if (sessionTime <= 0 && breakTime <= 0) {
          setSessionTime(sessionTimeFixed)
          setBreakTime(breakTimeFixed)
        }
        break;

      default: 
        console.log("Renseigner un type valide")
      }
    }
    
  const playPause = () => setChrono(!chrono);

  
  const handleSession = (param) => {
    if (param === "+") {
      setSessionTime(sessionTime + 60)
      setSessionTimeFixed(sessionTimeFixed + 60)
    }
    else if (param === "-") {
      if (sessionTime / 60 > 1) {
        setSessionTime(sessionTime - 60)
        setSessionTimeFixed(sessionTimeFixed - 60)
      }
    }
  }

  const handleBreak = (param) => {
    if (param === "+") {
      setBreakTime(breakTime + 60)
      setBreakTimeFixed(breakTimeFixed + 60)
    }
    else if (param === "-") {
      if (breakTime / 60 > 1) {
        setBreakTime(breakTime - 60)
        setBreakTimeFixed(breakTimeFixed - 60)
      }
    }
  }

  const resetFunc = () => {
    if (chrono) setChrono(!chrono)

    setSessionTime(sessionTimeFixed)
    setBreakTime(breakTimeFixed)
  }
    
  return (
    <>
      <div className={chrono ? "container anim" : "container"}>          

        <div className="header">

          <div className="session">
            <p>SESSION</p>
            <button className="btn-plus" onClick={() => handleSession('+')}>+</button>
              <p className="chiant">{sessionTimeFixed / 60}</p>
            <button className="btn-minus" onClick={() => handleSession('-')}>-</button>
          </div>
          
          <div className="break">
            <p>BREAK</p>
            <button className="btn-plus" onClick={() => handleBreak('+')}>+</button>
              <p className="chiant">{breakTimeFixed / 60}</p>
            <button className="btn-minus"  onClick={() => handleBreak('-')}>-</button>    
          </div>

        </div>

        <div className="timer">
          { sessionTime >= 0 ? 

            `${Math.trunc(sessionTime / 60)} :  
             ${sessionTime % 60 < 10 ? `0${sessionTime % 60}` : `${sessionTime % 60}` }`
          : 
            `${Math.trunc(breakTime / 60)} :  
             ${breakTime % 60 < 10 ? `0${breakTime % 60}` : `${breakTime % 60}` }`
          }
        </div>


        <div className="container-buttons">
          <div className="play-pause">
            <button className="play-pause-btn" onClick={playPause}>
                <img src={chrono ? Pause : Play} alt="Bouton play / pause" />
            </button>
          </div>
          <div className="reset">
            <button className="reset-btn">
              <img src={Reset} alt="bouton reset" onClick={resetFunc} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
 
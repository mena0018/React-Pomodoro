import "../Styles/css/Home.css"
import Play from "../Images/play.svg"
import Pause from "../Images/pause.svg"
import Reset from "../Images/reset.svg"
import {useState} from "react"

export default function Home() {

  const [sessionTime, setSessionTime] = useState(1500)
  const [sessionTimeFixed, setSessionTimeFixed] = useState(1500)
  const [breakTime, setBreakTime] = useState(300)
  const [breakTimeFixed, setBreakTimeFixed] = useState(300)
  const [chrono, setChrono] = useState(false)
 
  return (
    <>
      <div className="container">          

        <div className="header">
          <div className="session">
            <p>SESSION</p>
            <button className="btn-plus">+</button>
              <span>{sessionTimeFixed / 60}</span>
            <button className="btn-minus">-</button>
          </div>
          <div className="break">
            <p>BREAK</p>
            <button className="btn-plus">+</button>
              <span>{breakTimeFixed / 60}</span>
            <button className="btn-minus">-</button>    
          </div>
        </div>


        <div className="timer">25 : 00</div>


        <div className="container-buttons">
          <div className="play">
            <button className="play-btn">
                <img src={Play} alt="Bouton play" />
            </button>
          </div>
          <div className="reset-pause">
            <button className="reset-pause-btn">
              <img src={Reset} alt="bouton reset / pause" />
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
 
import {Component} from 'react'

import './index.css'

function timeInSeconds(sec) {
  let minutes = parseInt(sec / 60, 10)
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  let seconds = sec - 60 * minutes
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${minutes}:${seconds}`
}

class Stopwatch extends Component {
  state = {time: 0}

  onStart = () => {
    clearInterval(this.timerId)
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1,
      }))
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({time: 0})
  }

  render() {
    const {time} = this.state
    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="img-head-container">
            <img
              className="timer-img"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <h1 className="para">Timer</h1>
          </div>
          <h1 className="timer">{timeInSeconds(time)}</h1>
          <div className="buttons-container">
            <button
              className="btn start-btn"
              type="button"
              onClick={this.onStart}
            >
              Start
            </button>
            <button
              className="btn stop-btn"
              type="button"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              className="btn reset-btn"
              type="button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

import React from "react";
import moment from "moment";

class Timer extends React.Component {
  state = {
    month: undefined,
    day: undefined,
    hour: undefined,
    min: undefined,
    sec: undefined,
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeFromNow, timeFormat } = this.props;
      const then = moment(timeFromNow, timeFormat);
      const now = moment();
      const timer = moment(then - now);
      const month = timer.format("M");
      const day = timer.format("D");
      const hour = timer.format("HH");
      const min = timer.format("mm");
      const sec = timer.format("ss");
      this.setState({ month, day, hour, min, sec });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { month, day, hour, min, sec } = this.state;
    return (
      <div>
        <h1>Countdown to my birthday</h1>
        <div className="wrapper">
          <div className="countdown-item">
            {month}
            <span>Months</span>
          </div>
          <div className="countdown-item">
            {day}
            <span>Days</span>
          </div>
          <div className="countdown-item">
            {hour}
            <span>Hours</span>
          </div>
          <div className="countdown-item">
            {min}
            <span>Minutes</span>
          </div>
          <div className="countdown-item">
            {sec}
            <span>Seconds</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Timer;

import React from 'react';

class ClockWidget extends React.Component {

  constructor (props) {
    super(props);

    this.state = {date: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick () {
    const date = new Date();
    this.setState({ date });
  }

  componentDidMount () {
    this.intervalId = setInterval(this.tick, 1000); 
    // setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    // clearInterval(setInterval(this.setState({ date }), 1000))
    clearInterval(this.intervalId);
  }


  render () {
    return (
      <h2 className="cheese">
        Time: {this.state.date.getHours()}:
        {this.state.date.getMinutes()}:
        {this.state.date.getSeconds()}
      </h2>
    )
  }
}

export default ClockWidget;
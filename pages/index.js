import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state: {
      currentMonth: '',
      currentDay: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Reservations</h1>
      </div>
    )
  }
}
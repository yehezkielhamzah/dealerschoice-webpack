import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
  }
  render () {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

const root = document.querySelector('#root');
ReactDOM.render(<App/>, root)
import React from 'react'
import ReactDOM from 'react-dom'

export default class HelloWorld extends React.Component {
  render() {
    return(
      <div>
        <h1>
          Hello
          <span >Electron!!</span>
        </h1>
      </div>
    )
  }
}
ReactDOM.render(<HelloWorld />, document.getElementById('sample'))

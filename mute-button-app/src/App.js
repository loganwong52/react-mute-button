import React from 'react'
// App.js

// CLASS-BASED COMPONENT VERSION OF App.js
import "./App.css"
import { Component } from "react" // we need to import Component
import MuteButton from "./components/MuteButton.js"

class App extends Component {
  // states
  state = { // "state" is a reserved variable name for React components
    isMuted: false
  }

  // event handlers
  toggleMute = () => {
    let newMuteState = !this.state.isMuted // notice how we use 'this'
    console.log("setting new mute state value:", newMuteState)
    this.setState({ isMuted: newMuteState }) // call setState with a object of key-values to update
  }

  // render
  render() {
    return (
      <div className="App">
        <h2>Mute Button App</h2>
        <hr />
        <MuteButton isMuted={this.state.isMuted} toggleMute={this.toggleMute} />
      </div>
    )
  }
}

export default App




/////////////////////////////////////////////////////////
// FUNCTION-BASED COMPONENT VERSION OF App.js
// import "./App.css"
// import { useState } from "react"
// import MuteButton from "./components/MuteButton.js"

// function App() {
//   // states
//   const [isMuted, setIsMuted] = useState(false)

//   // event handlers
//   const toggleMute = () => {
//     let newMuteState = !isMuted
//     console.log("setting new mute state value:", newMuteState)
//     setIsMuted(newMuteState)
//   }

//   // render
//   return (
//     <div className="App">
//       <h2>Mute Button App</h2>
//       <hr />
//       <MuteButton isMuted={isMuted} toggleMute={toggleMute} />
//     </div>
//   )
// }

// export default App
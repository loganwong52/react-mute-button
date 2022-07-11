import React from 'react'

// CLASS-BASED COMPONENT VERSION OF MuteButton.js
// MuteButton.js

import { Component } from "react" // we need to import Component
import OnIcon from "../icons/on.svg"
import OffIcon from "../icons/off.svg"

class MuteButton extends Component {
    // props
    // const { isMuted, toggleMute } = this.props; // notice how we use 'this'

    // render
    render() {
        return (
            <button onClick={this.props.toggleMute}> {/* or could be this.props.toggleMute */}
                {
                    this.props.isMuted
                        ? <img src={OffIcon} alt="AudioOff" />
                        : <img src={OnIcon} alt="AudioOn" />
                }
            </button>
        )
    }
}

export default MuteButton;


/////////////////////////////////////////////////////
// DESTRUCTURING EXAMPLE:
// MuteButton.js

// import OnIcon from "../icons/on.svg"
// import OffIcon from "../icons/off.svg"

// function MuteButton(props) {
//     // props
//     const { isMuted, toggleMute } = props; // destructuring example

//     // render
//     return (
//         <button onClick={toggleMute}>
//             {
//                 isMuted
//                     ? <img src={OffIcon} alt="AudioOff" />
//                     : <img src={OnIcon} alt="AudioOn" />
//             }
//         </button>
//     )
// }

// export default MuteButton;



// NO DESTRUCTRING EXAMPLE:
// import OnIcon from "../icons/on.svg"
// import OffIcon from "../icons/off.svg"

// function MuteButton(props) {
//     // render
//     return (
//         <button onClick={props.toggleMute}>
//             {
//                 props.isMuted
//                     ? <img src={OffIcon} alt="AudioOff" />
//                     : <img src={OnIcon} alt="AudioOn" />
//             }
//         </button>
//     )
// }

// export default MuteButton
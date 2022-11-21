import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
  }

  doSomething() {
    this.player.current.play(); // make use of the player and call methods
  }

  render() {
    return (
      <Player
        onEvent={(event) => {
          if (event === "load") this.doSomething(); // check event type and do something
        }}
        ref={this.player}
        autoplay={true}
        loop={true}
        controls={true}
        src='https://assets1.lottiefiles.com/private_files/lf30_obidsi0t.json'
        style={{ height: "100%", width: "100%" }}></Player>
    );
  }
}

export default Animation;

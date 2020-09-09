import React, {FC} from "react";
import ReactDOM from "react-dom";
import Img from "./images/img1.jpg";
import "./styles.scss";

const App: FC = () => {
  return(
    <div>
      <p>Hello World</p>
      <img src={Img} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
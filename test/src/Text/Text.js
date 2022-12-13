import { Component } from "react";
import "./style.css";
import backimg from "../images/backimg.png";
import Farhad from "../images/Farhad.png";
import Pater from "../images/Pater.png";
export default class Text extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">What People Say</h1>
        <p className="text_word">Lorem ipsum dolor sit amet, consectetur </p>
        <img className="img" src={backimg} alt="." />
        <img className="img1" src={Farhad} alt="." />
        <img className="img1" src={Pater} alt="." />

        <h4 className="name">Williamsons</h4>
        <h4 className="name1">Farhad Reja</h4>
        <h4 className="name2">Peter sams</h4>
        <p className="will_word">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit. Dui posuere nulla id feugiat <br /> morbi
          dictum. Nec enim mauris velit integer.
          <br /> Vitae varius interdum enim eget elementum.
          <br /> Eu velit tortor proin risus amet habitant.
        </p>
        <p className="will_word1">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit. Dui posuere nulla id feugiat <br /> morbi
          dictum. Nec enim mauris velit integer.
          <br /> Vitae varius interdum enim eget elementum.
          <br /> Eu velit tortor proin risus amet habitant.
        </p>
        <p className="will_word2">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit. Dui posuere nulla id feugiat <br /> morbi
          dictum. Nec enim mauris velit integer.
          <br /> Vitae varius interdum enim eget elementum.
          <br /> Eu velit tortor proin risus amet habitant.
        </p>
      </div>
    );
  }
}

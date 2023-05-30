import React from "react";
import { image } from "../data/data.js";
import {city, state} from "../data/data.js"


function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I'm a Web Developer from {city}, {state}</p>
    {/* <p>I like to take long walks on the beach and play with puppies</p> */}
    <img src={image} alt="I made this" />
  </div>
  );
}

export default About;



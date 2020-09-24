/* eslint-disable */

import "../style/index.scss";
import "../style/style.css";

window.onload = function() {
  let names = ["daniel", "andres", "catherine", "cesar", "edward"];
  let header = document.querySelector("#myHeader");
  let limit = names.length;

  let i = Math.floor(Math.random() * limit);

  header.innerHTML = header.innerHTML + " " + names[i];

  //   creating an object - custom variable
  let person = {
    name: "daniel",
    age: 30,
    role: "teacher"
  };

  for (let property in person) {
    console.log(property, person[property]);
  }
};

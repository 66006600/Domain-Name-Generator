/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".com", ".net", ".us", ".io"];

for (i = 0; i < pronoun.length; i++) {
  for (k = 0; k < adj.length; k++) {
    for (z = 0; z < noun.length; z++) {
      for (e = 0; e < ext.length; e++) {
        console.log(pronoun[i] + adj[k] + noun[z] + ext[e]);
      }
    }
  }
}

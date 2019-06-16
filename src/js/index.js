/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomGreeting();
};

let generateRandomGreeting = () => {
  let greetings = [
    "Happy birthday, Dad!",
    "Feliz cumpleaños, Papá!",
    "Feliz aniversário Papai!",
    "Joyeux anniversaire Papa!",
    "Buon compleanno papà!",
    "爸爸生日快乐",
    "Bon anivèsè, papa!",
    "Grattis på födelsedagen pappa!",
    "สุขสันต์วันเกิดคุณพ่อ!",
    "Furaha ya kuzaliwa, Baba!",
    "Selamat ulang tahun ayah!",
    "Maligayang kaarawan, itay!",
    "Co-là-breith math, Dad!"
  ];
  let indexGreetings = Math.floor(Math.random() * greetings.length);
  return greetings[indexGreetings];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "heart", "club", "spade"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

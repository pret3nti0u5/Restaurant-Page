// entrypoint for the app
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/pageLoad.css";
import "./styles/animations.css";
import "./styles/about.css";
import "./functions/parallax";
import home from "./pages/home";
import menu from "./pages/menu";
import about from "./pages/about";
import render from "./functions/render";
import pageLoad from "./functions/pageLoad";
import firstLoad from "./functions/firstLoad";

firstLoad();

const homeButton = document.querySelector("#header-total-logo");
const menuButton = document.querySelector("#menu-web");
const aboutButton = document.querySelector("#about-web");

homeButton.addEventListener('click', function(){
    render();
    home();
    pageLoad();
});

menuButton.addEventListener('click', function(){
    render();
    menu();
    pageLoad();
});

aboutButton.addEventListener('click', function(){
    render();
    about();
    pageLoad();
});


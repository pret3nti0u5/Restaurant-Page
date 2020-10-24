import backgroundSpiralImage from "../assets/imgs/background-spiral.png";
import jokerImage from "../assets/imgs/Joker-white-outline.png";
import takeYourHeartImage from "../assets/imgs/Take-your-heart.png";
import pickachuFoodImage from "../assets/imgs/Pickachu-no-drop-shadow.png";
import battleMenuLeftImage from "../assets/imgs/battle-menu-left.png";
import battleMenuRightImage from "../assets/imgs/battle-menu-right.png";

const home = function(){
    const content = document.querySelector('#content');

    const background = document.createElement("div");
    background.id="background";
    content.appendChild(background);

    const parallaxContainer = document.createElement("div");
    parallaxContainer.id="parallax-container"

    const spiralContainer = document.createElement("div");
    spiralContainer.id="spiral-container";
    spiralContainer.className="parallax"
    spiralContainer.setAttribute("data-speed", 1);

    const backgroundSpiral = document.createElement("img");
    backgroundSpiral.src=backgroundSpiralImage;
    backgroundSpiral.id="background-spiral";
    backgroundSpiral.className="parallax";

    spiralContainer.appendChild(backgroundSpiral);

    const jokerContainer = document.createElement("div");
    jokerContainer.id="joker-container";
    jokerContainer.className="parallax"
    jokerContainer.setAttribute("data-speed", 6);

    const joker = document.createElement("img");
    joker.src=jokerImage;
    joker.id="joker";
    joker.className="parallax";

    jokerContainer.appendChild(joker);

    parallaxContainer.appendChild(spiralContainer);
    parallaxContainer.appendChild(jokerContainer);

    content.appendChild(parallaxContainer);

    const footer = document.createElement("div");
    footer.id="footer";

    const takeYourHeart = document.createElement("img");
    takeYourHeart.src=takeYourHeartImage;
    takeYourHeart.id="Take-your-heart";
    footer.appendChild(takeYourHeart);

    const food = document.createElement("div");
    food.id="food";

    const pickachuFood = document.createElement("img");
    pickachuFood.src=pickachuFoodImage;
    pickachuFood.id="pickachu-food";
    food.appendChild(pickachuFood);

    const battleMenuLeft = document.createElement("img");
    battleMenuLeft.src=battleMenuLeftImage;
    battleMenuLeft.id="battle-menu-left";
    food.appendChild(battleMenuLeft);

    const battleMenuRight = document.createElement("img");
    battleMenuRight.src=battleMenuRightImage;
    battleMenuRight.id="battle-menu-right";
    food.appendChild(battleMenuRight);

    footer.appendChild(food);

    content.appendChild(footer);

    const pageLoad = document.createElement("div");
    pageLoad.className="pageLoad";

    content.appendChild(pageLoad);
}

export default home;
import snorlaxFoodImage from "../assets/imgs/snorlax-food.png";
import eeveeFoodImage from "../assets/imgs/eevee-food.png";
import jigglypuffFoodImage from "../assets/imgs/jigglypuff-food.png";
import pickachuDrinkImage from "../assets/imgs/pickachu-drink.png";
import eeveeDrinkImage from "../assets/imgs/eevee-drink.png";
import gengarDrinkImage from "../assets/imgs/gengar-drink.png";

const menu = function(){
    const content = document.querySelector("#content");

    const backgroundMenu = document.createElement("div");
    backgroundMenu.id="background-menu";
    content.appendChild(backgroundMenu);

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    const snorlaxFood = document.createElement("img");
    snorlaxFood.src=snorlaxFoodImage;
    snorlaxFood.id="snorlax-food";
    menuContainer.appendChild(snorlaxFood);
    
    const eeveeFood = document.createElement("img");
    eeveeFood.src=eeveeFoodImage;
    eeveeFood.id="eevee-food";
    menuContainer.appendChild(eeveeFood);

    const jigglypuffFood = document.createElement("img");
    jigglypuffFood.src=jigglypuffFoodImage;
    jigglypuffFood.id="jigglypuff-food";
    menuContainer.appendChild(jigglypuffFood);

    const pickachuDrink = document.createElement("img");
    pickachuDrink.src=pickachuDrinkImage;
    pickachuDrink.id="pickachu-drink";
    menuContainer.appendChild(pickachuDrink);    

    const eeveeDrink = document.createElement("img");
    eeveeDrink.src=eeveeDrinkImage;
    eeveeDrink.id="eevee-drink";
    menuContainer.appendChild(eeveeDrink);    

    const gengarDrink = document.createElement("img");
    gengarDrink.src=gengarDrinkImage;
    gengarDrink.id="gengar-drink";
    menuContainer.appendChild(gengarDrink);    

    content.appendChild(menuContainer);

    const pageLoad = document.createElement("div");
    pageLoad.className="pageLoad";

    content.appendChild(pageLoad);
}

export default menu;
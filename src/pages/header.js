import headerTotalLogoImage from "../assets/imgs/header-total-logo.png";
import menuWebImage from "../assets/imgs/menu-web.png";
import aboutWebImage from "../assets/imgs/about-web.png";

const headerDiv = function(){
    const header = document.createElement("div");
    header.id="header";

    const headerTotalLogo = document.createElement("img");
    headerTotalLogo.src=headerTotalLogoImage;
    headerTotalLogo.id="header-total-logo";

    header.appendChild(headerTotalLogo);

    const menuWeb = document.createElement("img");
    menuWeb.src=menuWebImage;
    menuWeb.id="menu-web";

    header.appendChild(menuWeb);

    const aboutWeb = document.createElement("img");
    aboutWeb.src=aboutWebImage;
    aboutWeb.id="about-web";

    header.appendChild(aboutWeb);
    
    return header;
}

export default headerDiv;
class MenuResponsivo {
    constructor(menu, navList, links){
        this.mobileMenu = document.querySelector(menu);
        this.navList = document.querySelector(navList);
        this.links = document.querySelectorAll(links);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileMenu  = new MenuResponsivo(
    
    ".menu",
    ".links",
    ".Links li"
);

mobileMenu.init();

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  animatedLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.1}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animatedLinks();

    // Adiciona o evento de clique fora do menu apenas quando o menu está ativo
    if (this.navList.classList.contains(this.activeClass)) {
      document.addEventListener("click", this.handleClickOutside);
    } else {
      document.removeEventListener("click", this.handleClickOutside);
    }
  }

  handleClickOutside(event) {
    // Verifica se o clique foi fora do menu e do botão mobile
    if (!this.navList.contains(event.target) && !this.mobileMenu.contains(event.target)) {
      this.navList.classList.remove(this.activeClass);
      this.mobileMenu.classList.remove(this.activeClass);
      this.animatedLinks(); // Reseta animação dos links
      document.removeEventListener("click", this.handleClickOutside);
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(".mobileMenu", ".menu", ".menu li");
mobileNavbar.init();

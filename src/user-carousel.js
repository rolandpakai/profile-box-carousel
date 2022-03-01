import { Carousel } from "bootstrap";

export default class UserCarousel {
  constructor(root, carouselButtonEvent) {
    this.items = [];
    this.root = root;
	this.carouselButtonEvent = carouselButtonEvent;
    this.carousel = new Carousel(root);
  }
  
  addButtonEventListener(container) {
	  container.addEventListener("click", (e) => {
	  if (e.target.classList.contains("profile-btn")) {
		this.carouselButtonEvent(e);
	  }
    })
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(id) {
    this.items = this.items.filter(function (item, index, arr) {
      return item.id !== parseInt(id, 10);
    });

    const cardNode = document.querySelector(".card[data-id='" + id + "']");

    let activeItem = null;

    if (cardNode.parentElement.nextElementSibling) {
      activeItem = cardNode.parentElement.nextElementSibling;
    } else {
      activeItem = cardNode.parentElement.previousElementSibling;
    }

    activeItem.classList.add("active");
    cardNode.parentElement.remove();
  }
  
  render(items) {
    this.items = items;

    for (let i = 0; i < items.length; i++) {
      let active = false;
      if (i === 0) {
        active = true;
      }
      this.renderItem(items[i], active);
    }
  }

  renderItem(item, active) {
    var div = document.createElement("div");

    div.classList.add("carousel-item");
    if (active) {
      div.classList.add("active");
    }

    let carouselInnerElement = document.getElementById("carouselInnerId");

    div.innerHTML = item.getTemplate();

    carouselInnerElement.append(div);
	
	this.addButtonEventListener(div);
  }
  
  updateItem(item) {
    const itemNode = document.querySelector(
      ".card[data-id='" + item.getId() + "']"
    );

    itemNode.outerHTML = item.getTemplate();
	
	this.addButtonEventListener(itemNode);
  }

  to(index) {
    this.carousel.to(index);
  }

  toLatest() {
    this.to(this.items.length - 1);
  }
}

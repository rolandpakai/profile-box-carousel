import { Carousel } from "bootstrap";

export default class UserCarousel {
  constructor(root) {
    this.items = [];
    this.root = root;
    this.carousel = new Carousel(root);
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

  addProfileButtonEventListener(callback) {
    this.root.querySelectorAll(".profile-btn").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        callback(e);
      })
    );
  }

  addItem(user) {
    this.items.push(user);
  }

  updateItem(user) {
    const userCardNode = document.querySelector(
      ".card[data-id='" + user.getId() + "']"
    );

    userCardNode.outerHTML = user.getTemplate();
  }

  removeItem(id) {
    this.items = this.items.filter(function (item, index, arr) {
      return item.id !== parseInt(id, 10);
    });

    const userCardNode = document.querySelector(".card[data-id='" + id + "']");

    let activeItem = null;

    if (userCardNode.parentElement.nextElementSibling) {
      activeItem = userCardNode.parentElement.nextElementSibling;
    } else {
      activeItem = userCardNode.parentElement.previousElementSibling;
    }

    activeItem.classList.add("active");
    userCardNode.parentElement.remove();
  }

  renderItem(user, active) {
    var div = document.createElement("div");

    div.classList.add("carousel-item");
    if (active) {
      div.classList.add("active");
    }

    let carouselInnerElement = document.getElementById("carouselInnerId");

    div.innerHTML = user.getTemplate();

    carouselInnerElement.append(div);
  }

  to(index) {
    this.carousel.to(index);
  }

  toLatest() {
    this.to(this.items.length - 1);
  }
}

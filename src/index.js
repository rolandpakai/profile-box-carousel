import "./styles.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { getUsersData, getUserData } from "./user-service.js";
import UserModal from "./user-modal";
import UserCarousel from "./user-carousel";
import User from "./user.js";

const userCarousel = new UserCarousel(document.getElementById("carouselId"));
const userModal = new UserModal(
  document.getElementById("userModal"),
  userCarousel
);
const profileButton = document.getElementById("newProfileButton");

profileButton.addEventListener("click", () => {
  const data = {
    id: "0",
    first_name: "",
    last_name: "",
    email: "",
    avatar: ""
  };
  
  const user = new User(data);
  userModal.showModal(user);
});

const showUserProfileModal = (e) => {
  getUserData(e.currentTarget.dataset.id).then((responseData) => {
    const user = new User(responseData.data);
    userModal.showModal(user);
  });
};

getUsersData().then((responseData) => {
  let userList = [];

  for (let u of responseData.data) {
    let user = new User(u);
    userList.push(user);
  }

  userCarousel.render(userList);
  userCarousel.addProfileButtonEventListener(showUserProfileModal);
});

# User Card Carousel Javascript Application 

This project is about to create an editable user card in a carousel.
This project provides the skills you need to advance your JavaScript knowledge and provides training to support your journey as a Mid Technical Engineer. 
You'll also have the opportunity to practice key job skills using JavaScript to build applications and manage and learn from patterns. 
You will learn about JavaScript XMLHttpRequest, Promise, Classes and Bootstrap Cards, Modal and Carousel.

### 0. Initialize Project: Create a Vanilla Javascript Application

Tasks:

a) Create account on Sandbox (https://codesandbox.io/)

b) Create Vanilla by CodeSandbox Sandbox

c) Link the Sandbox to your Github account

### 1. JavaScript Http Requests

Watch the Academind short videos about XMLHttpRequest, fetch and Axios
using the reqres.in API

- Using XMLHttpRequest: https://academind.com/tutorials/xhr-fetch-axios-xmlhttprequest
- Using the fetch() API: https://academind.com/tutorials/xhr-fetch-axios-the-fetch-api
- Using Axios: https://academind.com/tutorials/xhr-fetch-axios-using-axios

Tasks

a) Create xhr.js

b) Create fetch.js

c) Create axios.js

d) Create buttons: Get Data, Send Data and add event listeners to this buttons 

e) Test the getData and sendData methods

Further on this Project we will use the fetch::sendHttpRequest method

### 2. Querying user data 

Tasks

a) Create User class (user.js) with the data constructor

Create user-service.js with the following methods

b) Implement getUserData 

c) Implement getAllUserData

d) Implement updateUserData

e) Implement deleteUserData

f) Implement createUserData

g) Test the methods

### 3. Implement user cards

Use Bootstrap Cards for displaying user profile
https://getbootstrap.com/docs/5.0/components/card/

Tasks

a) Add bootstrap 5.0.0 to the project dependency

b) Add the card html code to the user class as a template

c) Add variables to the card template

d) Implement the User::getTemplate method which returns the template replaced with  the user data 

e) Implement the renderUserList method which collects the users card template and renders it

f) Add event listener to the Show Profile button on the user card

### 4. Implement User Modal

Use Bootstrap Modal for editing user profile
https://getbootstrap.com/docs/5.0/components/modal/

Tasks

a) Create UserModal class (user-modal.js) with the root constructor

b) Add the modal template with variables

c) Bind the showUserModal(user) function to the Show Profile button

d) Implement the UserModal::showModal(user) method

e) Implement the UserModal::hideModal method

### 5. Implement Save and Delete functionality

Tasks

a) Add Save and Delete buttons to the user modal

b) Bind saveChanges and delete events to the Save and Delete buttons

c) Implement UserModal:updateUserCard(user) method

d) Implement UserModal::removeUserCard(id) method


### 6. Implement Confirm delete modal

Tasks

a) Add confirmModal template

b) Add event listener to the confirm button

### 7. Implement Add New Profile

Tasks

a) Create Add New Profile button

b) Add event listener to the button

c) Implement UserModal::createUserCard(user) method


### 8. Implement Carousel

Use Bootstrap Carousel
https://getbootstrap.com/docs/5.0/components/carousel/

Tasks

a) Create UserCarousel class

b) Implement render, addItem, updateItem, removeItem, renderItem methods
